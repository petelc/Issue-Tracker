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
      const query = `query issueList($status: StatusType) {
        issueList (status: $status) {
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
              <IssueTable issues={issues} />
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
