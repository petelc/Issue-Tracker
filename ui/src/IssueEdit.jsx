/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    margin: 20,
    padding: 10,
  },
});

export default function IssueEdit({ match }) {
  const classes = useStyles();
  const { id } = match.params;
  return (
    <React.Fragment>
        <Paper className={classes.root}>
            <div>
                <h2>{`This is a place holder for editing issue ${id}`}</h2>
            </div>
        </Paper>
    </React.Fragment>
  );
}
