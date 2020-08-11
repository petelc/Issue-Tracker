/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';

// Handle Material UI Components
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
// import InputBase from "@material-ui/core/InputBase";
// For the Table
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// Data Import
import graphQLFetch from './graphQLFetch';
/*
const BootstrapInput = withStyles((theme) => ({
  input: {
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
}))(InputBase);
*/

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
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
});

export default withStyles(styles)(
  class IssueEdit extends React.Component {
    constructor() {
      super();
      this.state = {
        issue: {},
      };
      this.onChange = this.onChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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

    onChange(event) {
      const { name, value } = event.target;
      this.setState((prevState) => ({
        issue: { ...prevState.issue, [name]: value },
      }));
    }

    handleSubmit(e) {
      e.preventDefault();
      const { issue } = this.state;
      // eslint-disable-next-line no-console
      console.log(issue);
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
      if (data) {
        const { issue } = data;
        issue.due = issue.due ? issue.due : '';
        issue.effort = issue.effort != null ? issue.effort.toString() : '';
        issue.owner = issue.owner != null ? issue.owner : '';
        issue.description = issue.description != null ? issue.description : '';
        this.setState({ issue });
      } else {
        this.setState({ issue: {} });
      }
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
      return (
        <form onSubmit={this.handleSubmit}>
          <h3>{`Editing issue: ${id}`}</h3>
          <TableContainer component={Paper}>
            <Table className={classes.table}>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell>
                    <FormControl
                      className={clsx(
                        classes.margin,
                        classes.withoutLabel,
                        classes.textField,
                      )}
                    >
                      <FilledInput
                        id="standard-adornment-created"
                        value={created}
                        disabled={true}
                        endAdornment={
                          <InputAdornment position="end">
                            Created
                          </InputAdornment>
                        }
                        aria-describedby="standard-created-helper-text"
                        inputProps={{
                          'aria-label': 'created',
                        }}
                      />
                      <FormHelperText id="standard-created-helper-text">
                        Created
                      </FormHelperText>
                    </FormControl>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>
                    <FormControl
                      className={clsx(
                        classes.margin,
                        classes.withoutLabel,
                      )}
                    >
                      <Select
                        id="standard-adornment-status"
                        value={status}
                        onChange={this.onChange}
                        aria-describedby="standard-status-helper-text"
                      >
                        <MenuItem value="">(All)</MenuItem>
                        <MenuItem value="New">New</MenuItem>
                        <MenuItem value="Assigned">Assigned</MenuItem>
                        <MenuItem value="Fixed">Fixed</MenuItem>
                        <MenuItem value="Closed">Closed</MenuItem>
                      </Select>
                      <FormHelperText id="standard-status-helper-text">
                        Status
                      </FormHelperText>
                    </FormControl>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>
                    <FormControl
                      className={clsx(
                        classes.margin,
                        classes.withoutLabel,
                        classes.textField,
                      )}
                    >
                      <Input
                        id="standard-adornment-owner"
                        value={owner}
                        onChange={this.onChange}
                        endAdornment={
                          <InputAdornment position="end">owner</InputAdornment>
                        }
                        aria-describedby="standard-owner-helper-text"
                        inputProps={{
                          'aria-label': 'owner',
                        }}
                      />
                      <FormHelperText id="standard-effort-helper-text">
                        Owner
                      </FormHelperText>
                    </FormControl>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>
                    <FormControl
                      className={clsx(
                        classes.margin,
                        classes.withoutLabel,
                        classes.textField,
                      )}
                    >
                      <Input
                        id="standard-adornment-effort"
                        value={effort}
                        onChange={this.onChange}
                        endAdornment={
                          <InputAdornment position="end">effort</InputAdornment>
                        }
                        aria-describedby="standard-effort-helper-text"
                        inputProps={{
                          'aria-label': 'effort',
                        }}
                      />
                      <FormHelperText id="standard-effort-helper-text">
                        Effort
                      </FormHelperText>
                    </FormControl>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>
                    <FormControl
                      className={clsx(
                        classes.margin,
                        classes.withoutLabel,
                        classes.textField,
                      )}
                    >
                      <Input
                        id="standard-adornment-due"
                        value={due}
                        onChange={this.onChange}
                        endAdornment={
                          <InputAdornment position="end">due</InputAdornment>
                        }
                        aria-describedby="standard-due-helper-text"
                        inputProps={{
                          'aria-label': 'due',
                        }}
                      />
                      <FormHelperText id="standard-due-helper-text">
                        Due
                      </FormHelperText>
                    </FormControl>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>
                    <FormControl
                      className={clsx(
                        classes.margin,
                        classes.withoutLabel,
                        classes.textField,
                      )}
                    >
                      <Input
                        id="standard-adornment-title"
                        value={title}
                        onChange={this.onChange}
                        size={50}
                        endAdornment={
                          <InputAdornment position="end">title</InputAdornment>
                        }
                        aria-describedby="standard-title-helper-text"
                        inputProps={{
                          'aria-label': 'title',
                        }}
                      />
                      <FormHelperText id="standard-title-helper-text">
                        Title
                      </FormHelperText>
                    </FormControl>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>
                    <FormControl
                      className={clsx(classes.margin, classes.withoutLabel)}
                      fullWidth
                    >
                      <TextField
                        id="standard-adornment-description"
                        fullWidth
                        multiline
                        rows={18}
                        variant="outlined"
                        value={description}
                        onChange={this.onChange}
                        aria-describedby="standard-description-helper-text"
                        inputProps={{
                          'aria-label': 'description',
                        }}
                      />
                      <FormHelperText id="standard-description-helper-text">
                        Description
                      </FormHelperText>
                    </FormControl>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                      >
                      Apply
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </form>
      );
    }
  },
);
