/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

// Handle Material UI Components
// import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import { MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
// For the Table
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// ****Hopefully this solves the width issue ****
// import { sizing } from '@material-ui/system';

// Data Import
import graphQLFetch from './graphQLFetch';
// my component imports
import NumInput from './controls/NumInput.jsx';
import DateInput from './controls/DateInput.jsx';
// import SmallTextInput from './controls/SmallTextInput.jsx';
import MediumTextInput from './controls/MediumTextInput.jsx';
import LargeTextInput from './controls/LargeTextInput.jsx';
import XLargeTextInput from './controls/XLargeTextInput.jsx';

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

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing(1),
  },
  select: {
    width: '15ch',
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
});

export default withStyles(styles)(
  class IssueEdit extends React.Component {
    constructor() {
      super();
      this.state = {
        issue: {},
        invalidFields: {},
      };
      this.onChange = this.onChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.onValidityChange = this.onValidityChange.bind(this);
    }

    componentDidMount() {
      this.loadData();
    }

    componentDidUpdate(prevProps) {
      const {
        match: {
          params: { id: prevId },
        },
      } = prevProps;
      const {
        match: {
          params: { id },
        },
      } = this.props;
      if (id !== prevId) {
        this.loadData();
      }
    }

    onChange(event, naturalValue) {
      const { name, value: textValue } = event.target;
      const value = naturalValue === undefined ? textValue : naturalValue;
      this.setState((prevState) => ({
        issue: { ...prevState.issue, [name]: value },
      }));
    }

    async handleSubmit(e) {
      e.preventDefault();
      const { issue, invalidFields } = this.state;
      if (Object.keys(invalidFields).length !== 0) return;

      const query = `mutation issueUpdate(
        $id: Int!
        $changes: IssueUpdateInputs!
      ) {
        issueUpdate(
          id: $id
          changes: $changes
        ) {
          id title status owner
          effort created due description
        }
      }`;

      const { id, created, ...changes } = issue;
      const data = await graphQLFetch(query, { changes, id });
      if (data) {
        this.setState({ issue: data.issueUpdate });
        alert('Updated issue successfully'); // eslint-disable-line no-alert
      }
    }

    onValidityChange(event, valid) {
      const { name } = event.target;
      this.setState((prevState) => {
        const invalidFields = { ...prevState.invalidFields, [name]: !valid };
        if (valid) delete invalidFields[name];
        return { invalidFields };
      });
    }

    async loadData() {
      const query = `query issue($id: Int!) {
        issue(id: $id) {
          id title status owner
          effort created due description
        }
      }`;

      let {
        match: {
          params: { id },
        },
      } = this.props;
      id = parseInt(id, 10);
      const data = await graphQLFetch(query, { id });
      this.setState({ issue: data ? data.issue : {}, invalidFields: {} });
    }

    render() {
      const { classes } = this.props;
      const {
        issue: { id },
      } = this.state;
      const {
        match: {
          params: { id: propsId },
        },
      } = this.props;
      // propsId = parseInt(propsId, 10);
      if (id == null) {
        if (propsId != null) {
          return <h3>{`Issue with ID ${propsId} not found`}</h3>;
        }
        return null;
      }
      const {
        issue: { title, status },
      } = this.state;
      const {
        issue: { owner, effort, description },
      } = this.state;
      const {
        issue: { created, due },
      } = this.state;
      const { invalidFields } = this.state;
      let validationMessage;
      if (Object.keys(invalidFields).length !== 0) {
        validationMessage = (
          <div className="error">
            Please correct invalid fields before submitting.
          </div>
        );
      }
      return (
        <form onSubmit={this.handleSubmit}>
          <h3>{`Editing issue: ${id}`}</h3>
          <TableContainer component={Paper}>
            <Table className={classes.table}>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell width="10%">
                    Created
                  </StyledTableCell>
                  <StyledTableCell>
                    <MediumTextInput
                      name="created"
                      value={created}
                      onChange={this.onChange}
                      key={id}
                    />
                </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>
                    Status
                  </StyledTableCell>
                  <StyledTableCell>
                    <select name="status" value={status} onChange={this.onChange} key={id}>
                      <option value="New">New</option>
                      <option value="Assigned">Assigned</option>
                      <option value="Fixed">Fixed</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>
                    Owner
                  </StyledTableCell>
                  <StyledTableCell>
                    <MediumTextInput
                      name="owner"
                      value={owner}
                      onChange={this.onChange}
                      key={id}
                    />
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>
                    Effort
                  </StyledTableCell>
                  <StyledTableCell>
                    <NumInput
                      name="effort"
                      value={effort}
                      onChange={this.onChange}
                      key={id}
                      />
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>
                    Due
                  </StyledTableCell>
                  <StyledTableCell>
                    <DateInput
                      name="due"
                      value={due}
                      onChange={this.onChange}
                      onValidityChange={this.onValidityChange}
                      key={id}
                    />
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>
                    Title
                  </StyledTableCell>
                  <StyledTableCell>
                    <LargeTextInput
                      name="title"
                      value={title}
                      onChange={this.onChange}
                      key={id}
                    />
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>
                    Description
                  </StyledTableCell>
                  <StyledTableCell>
                    <XLargeTextInput
                      name="description"
                      value={description}
                      fullwidth = {false}
                      multiline={true}
                      rows={18}
                      variant={'outlined'}
                      onChange={this.onChange}
                      key={id}
                      />
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>

                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                        type="submit"
                      >
                      Apply
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
          {validationMessage}
          <Link to={`/edit/${id - 1}`}>Prev</Link>
          {' | '}
          <Link to={`/edit/${id + 1}`}>Next</Link>
        </form>
      );
    }
  },
);
