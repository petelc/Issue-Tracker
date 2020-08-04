/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint "react/jsx-no-undef": "off" */
import React from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import DenseAppBar from './DenseAppBar.jsx';
import IssueFilter from './IssueFilter.jsx';
import IssueTable from './IssueTable.jsx';
import IssueAdd from './IssueAdd.jsx';
import graphQLFetch from './graphQLFetch';

const styles = {
  root: {
    margin: 20,
    padding: 20,
  },
};

export default withStyles(styles)(class IssueList extends React.Component {
  constructor() {
    super();
    this.state = { issues: [] };
    this.createIssue = this.createIssue.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = `query {
          issueList {
            id title status owner
            created effort due
          }
        }`;
    const data = await graphQLFetch(query);
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
    return (
          <React.Fragment>
            <CssBaseLine/>
            <div>
              <Paper className={ classes.root }>
                <h1>Issue Tracker</h1>
                <hr/>
                <IssueFilter />
                <hr />
                <IssueTable issues = { issues } />
                <hr />
                <IssueAdd createIssue = { this.createIssue } />
              </Paper>
            </div>
          </React.Fragment>
    );
  }
});
