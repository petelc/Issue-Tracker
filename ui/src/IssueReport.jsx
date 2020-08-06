/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    margin: 20,
    padding: 10,
  },
};

// TO DO: I need to change the way Material UI Styles are brought in
// Look at other components for guidance
export default withStyles(styles)(
  class IssueReport extends React.Component {
    constructor() {
      super();
      this.state = { issues: [] };
    }

    render() {
      const { classes } = this.props;
      return (
          <React.Fragment>
              <Paper className={classes.root}>
                    <div>
                        <h2>This is a placeholder for Issue Report</h2>
                    </div>
                </Paper>
          </React.Fragment>

      );
    }
  },
);
