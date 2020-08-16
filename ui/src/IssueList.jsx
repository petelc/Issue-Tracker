/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint "react/jsx-no-undef": "off" */
import React from 'react';
import { Route } from 'react-router-dom';
import URLSearchParams from 'url-search-params';
import CssBaseLine from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import DenseAppBar from './DenseAppBar.jsx';
// eslint-disable-next-line import/no-named-as-default
import IssueFilter from './IssueFilter.jsx';
import IssueTable from './IssueTable.jsx';
import IssueAdd from './IssueAdd.jsx';
import IssueDetail from './IssueDetail.jsx';
import graphQLFetch from './graphQLFetch';

const styles = {
  root: {
    margin: 20,
    padding: 10,
  },
};

// TO DO: I need to change the way Material UI Styles are brought in
// Look at other components for guidance
export default withStyles(styles)(
  class IssueList extends React.Component {
    constructor() {
      super();
      this.state = { issues: [] };
      this.createIssue = this.createIssue.bind(this);
      this.closeIssue = this.closeIssue.bind(this);
    }

    componentDidMount() {
      this.loadData();
    }

    componentDidUpdate(prevProps) {
      const { location: { search: prevSearch } } = prevProps;
      const { location: { search } } = this.props;
      if (prevSearch !== search) {
        this.loadData();
      }
    }

    // Handle the querystring param here for Issue Filter
    async loadData() {
      const { location: { search } } = this.props;
      const params = new URLSearchParams(search);
      const vars = {};
      if (params.get('status')) vars.status = params.get('status');

      // Adding in effortMin and effortMax parameters
      const effortMin = parseInt(params.get('effortMin'), 10);
      if (!Number.isNaN(effortMin)) vars.effortMin = effortMin;
      const effortMax = parseInt(params.get('effortMax'), 10);
      if (!Number.isNaN(effortMax)) vars.effortMax = effortMax;
      const query = `query issueList(
        $status: StatusType
        $effortMin: Int
        $effortMax: Int
        ) {
        issueList (
          status: $status
          effortMin: $effortMin
          effortMax: $effortMax
          ) {
          id title status owner
          created effort due
        }
      }`;

      const data = await graphQLFetch(query, vars);
      if (data) {
        this.setState({ issues: data.issueList });
      }
    }

    async createIssue(issue) {
      const query = `mutation issueAdd($issue: IssueInputs!) {
          issueAdd(issue: $issue) {
            id
          }
        }`;

      const data = await graphQLFetch(query, { issue });
      if (data) {
        this.loadData();
      }
    }

    async closeIssue(index) {
      const query = `mutation issueClose($id: Int!) {
        issueUpdate(id: $id, changes: { status: Closed }) {
          id title status owner
          effort created due description
        }
      }`;
      const { issues } = this.state;
      const data = await graphQLFetch(query, { id: issues[index].id });
      if (data) {
        this.setState((prevState) => {
          const newList = [...prevState.issues];
          newList[index] = data.issueUpdate;
          return { issues: newList };
        });
      } else {
        this.loadData();
      }
    }

    render() {
      const { issues } = this.state;
      // eslint-disable-next-line react/prop-types
      const { classes } = this.props;
      const { match } = this.props;
      return (
        <React.Fragment>
          <CssBaseLine />
          <div>
            <Paper className={classes.root}>
              <h1>Issue Tracker</h1>
              <hr />
              <IssueFilter />
              <hr />
              <IssueTable issues={issues} closeIssue={this.closeIssue} />
              <hr />
              <IssueAdd createIssue={this.createIssue} />
              <hr />
              <Route path={`${match.path}/:id`} component={IssueDetail} />
            </Paper>
          </div>
        </React.Fragment>
      );
    }
  },
);
