/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// Bootstrap
import { Tooltip, OverlayTrigger, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {
  BsFillXCircleFill, BsFillTrashFill, BsPencil, BsCheckAll,
} from 'react-icons/bs';

const IssueRow = withRouter(({
  issue,
  location: { search },
  closeIssue,
  deleteIssue,
  index,
}) => {
  const selectLocation = { pathname: `/issues/${issue.id}`, search };
  const closeTooltip = (
    <Tooltip id="close-tooltip" placement="top">Close Issue</Tooltip>
  );
  const deleteTooltip = (
    <Tooltip id="delete-tooltip" placement="top">Delete Issue</Tooltip>
  );
  return (
      <tr>
        <td component="th" scope="row" responsive="sm">{issue.id}</td>
        <td align="center" responsive="md">{issue.status}</td>
        <td align="center">{issue.owner}</td>
        <td align="center">{issue.created}</td>
        <td align="center"responsive="sm">{issue.effort}</td>
        <td align="center">{issue.due ? issue.due : ' '}</td>
        <td align="center">{issue.title}</td>
        <td align="center" responsive="lg">
          <Link to={selectLocation}>
              <Button bgStyle="default" size="small">
                  <BsCheckAll/>
              </Button>
          </Link>
          {' | '}
          <Link to={`/edit/${issue.id}`}>
              <Button size="small">
                  <BsPencil/>
              </Button>
          </Link>
        </td>
        <td align="center" responsive="lg">
          <OverlayTrigger delayShow={1000} overlay={closeTooltip}>
            <Button
              bsSize="small"
              onClick={() => { closeIssue(index); } }>
                <BsFillXCircleFill/>
            </Button>
          </OverlayTrigger>
          {' | '}
          <OverlayTrigger delayShow={1000} overlay={deleteTooltip}>
            <Button
              bsSize="small"
              onClick={() => { deleteIssue(index); } }>
                <BsFillTrashFill />
            </Button>
          </OverlayTrigger>
        </td>
      </tr >
  );
});

export default function IssueTable({ issues, closeIssue, deleteIssue }) {
  const issueRows = issues.map((issue, index) => (
      <IssueRow key={issue.id} issue={issue} closeIssue={closeIssue}
       deleteIssue={deleteIssue} index={index} />
  ));
  return (
    <Table striped bordered hover responsive variant="dark">
        <tr>
          <th responsive="sm">ID</th>
          <th align="center" responsive="md">Status</th>
          <th align="center"responsive="md">Owner</th>
          <th align="center">Created</th>
          <th align="center" responsive="sm">Effort</th>
          <th align="center">Due Date</th>
          <th align="center"responsive="md">Title</th>
          <th align="center"responsive="lg">Details</th>
          <th align="center" responsive="lg">Actions</th>
        </tr>
        <tbody>{issueRows}</tbody>
      </Table>
  );
}
