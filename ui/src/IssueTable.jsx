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

function IssueRow({ issue }) {
  return (
      <StyledTableRow >
        <StyledTableCell component="th" scope="row">{issue.id}</StyledTableCell>
        <StyledTableCell align="center">{issue.status}</StyledTableCell>
        <StyledTableCell align="center">{issue.owner}</StyledTableCell>
        <StyledTableCell align="center">{issue.created}</StyledTableCell>
        <StyledTableCell align="center">{issue.effort}</StyledTableCell>
        <StyledTableCell align="center">{issue.due ? issue.due : ' '}</StyledTableCell>
        <StyledTableCell align="center">{issue.title}</StyledTableCell>
      </StyledTableRow >
  );
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function IssueTable({ issues }) {
  const classes = useStyles();
  const issueRows = issues.map((issue) => (
      <IssueRow key={issue.id} issue={issue} />
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
          </TableRow>
        </TableHead>
        <TableBody>{issueRows}</TableBody>
      </Table>
    </TableContainer>
  );
}
