/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const IssueRow = withRouter(({
  issue,
  location: { search },
  closeIssue,
  index,
}) => {
  const selectLocation = { pathname: `/issues/${issue.id}`, search };
  return (
      <StyledTableRow >
        <StyledTableCell component="th" scope="row">{issue.id}</StyledTableCell>
        <StyledTableCell align="center">{issue.status}</StyledTableCell>
        <StyledTableCell align="center">{issue.owner}</StyledTableCell>
        <StyledTableCell align="center">{issue.created}</StyledTableCell>
        <StyledTableCell align="center">{issue.effort}</StyledTableCell>
        <StyledTableCell align="center">{issue.due ? issue.due : ' '}</StyledTableCell>
        <StyledTableCell align="center">{issue.title}</StyledTableCell>
        <StyledTableCell align="center">
          <Link to={`/edit/${issue.id}`}>
              <Button variant="contained" color="secondary" size="small">
                  Edit
              </Button>
          </Link>
        </StyledTableCell>
        <StyledTableCell align="center">
          <Link to={selectLocation}>
              <Button variant="contained" color="primary" size="small">
                  Select
              </Button>
          </Link>
        </StyledTableCell>
        <StyledTableCell align="center">
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => { closeIssue(index); } }>
              Close
          </Button>
        </StyledTableCell>
      </StyledTableRow >
  );
});

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function IssueTable({ issues, closeIssue }) {
  const classes = useStyles();
  const issueRows = issues.map((issue, index) => (
      <IssueRow key={issue.id} issue={issue} closeIssue={closeIssue} index={index} />
  ));
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Owner</StyledTableCell>
            <StyledTableCell align="center">Created</StyledTableCell>
            <StyledTableCell align="center">Effort</StyledTableCell>
            <StyledTableCell align="center">Due Date</StyledTableCell>
            <StyledTableCell align="center">Title</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
            <StyledTableCell align="center">Details</StyledTableCell>
            <StyledTableCell align="center">Close</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{issueRows}</TableBody>
      </Table>
    </TableContainer>
  );
}
