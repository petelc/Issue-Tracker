/* eslint-disable linebreak-style */

import React from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import URLSearchParams from 'url-search-params';

import withToasts from './withToasts.jsx';
import graphQLFetch from './graphQLFetch.js';
import store from './store.js';
import IssueFilter from './IssueFilter.jsx';

const statuses = ['New', 'Assigned', 'Fixed', 'Closed'];

class IssueReport extends React.Component {
  static async fetchData(match, search, showError) {
    const params = new URLSearchParams(search);
    const vars = { };
    if (params.get('status')) vars.status = params.get('status');

    const effortMin = parseInt(params.get('effortMin'), 10);
    if (!Number.isNaN(effortMin)) vars.effortMin = effortMin;
    const effortMax = parseInt(params.get('effortMax'), 10);
    if (!Number.isNaN(effortMax)) vars.effortMax = effortMax;

    const { params: { id } } = match;
    const idInt = parseInt(id, 10);
    if (!Number.isNaN(idInt)) {
      vars.hasSelection = true;
      vars.selectedId = idInt;
    }

    const query = `query issueList(
      $status: StatusType
      $effortMin: Int
      $effortMax: Int
    ) {
      issueCounts(
        status: $status
        effortMin: $effortMin
        effortMax: $effortMax
      ) {
        owner New Assigned Fixed Closed
      }
    }`;

    const data = await graphQLFetch(query, vars, showError);
    return data;
  }

  constructor(props) {
    super(props);
    const stats = store.initialData ? store.initialData.issueCounts : null;
    delete store.initialData;
    this.state = { stats };
  }

  componentDidMount() {
    const { stats } = this.state;
    if (stats == null) this.loadData();
  }

  componentDidUpdate(prevProps) {
    const { location: { search: prevSearch } } = prevProps;
    const { location: { search } } = this.props;
    if (prevSearch !== search) {
      this.loadData();
    }
  }

  async loadData() {
    const { location: { search }, match, showError } = this.props;
    const data = await IssueReport.fetchData(match, search, showError);
    if (data) {
      this.setState({ stats: data.issueCounts });
    }
  }

  render() {
    const headerColumns = (
      statuses.map((status) => (
        <th key={status}>{status}</th>
      ))
    );
    const { stats } = this.state;
    if (stats == null) return null;
    const statRows = stats.map((counts) => (
      <tr key={counts.owner}>
        <td>{counts.owner}</td>
        {statuses.map((status) => (
          <td key={status}>{counts[status]}</td>
        ))}
      </tr>
    ));
    return (
      <>
        <Card className="text-left bg-dark text-white">
          <Card.Header><h5>Filter</h5></Card.Header>
          <Card.Body>
            <IssueFilter urlBase="/report" />
          </Card.Body>
        </Card>
        <div className="spacer" />
        <Table striped bordered hover responsive variant="dark">
          <thead>
            <tr>
              <th>Owner</th>
              {headerColumns}
            </tr>
          </thead>
          <tbody>{statRows}</tbody>
        </Table>
      </>
    );
  }
}

const IssueReportWithToast = withToasts(IssueReport);
IssueReportWithToast.fetchData = IssueReport.fetchData;
export default IssueReportWithToast;
