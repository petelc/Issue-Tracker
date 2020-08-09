/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import URLSearchParams from 'url-search-params';
import { withRouter } from 'react-router-dom';

// Here we go with the Material UI
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import RefreshIcon from '@material-ui/icons/Refresh';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';

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

const styles = (theme) => ({
  button: {
    margin: theme.spacing(1),
  },
});

export default withRouter(withStyles(styles)(
  class IssueFilter extends React.Component {
    constructor({ location: { search } }) {
      super();
      const params = new URLSearchParams(search);
      this.state = {
        status: params.get('status') || '',
        changed: false,
      };
      this.onChangeStatus = this.onChangeStatus.bind(this);
      this.ApplyFilter = this.ApplyFilter.bind(this);
      this.showOriginalFilter = this.showOriginalFilter.bind(this);
    }

    componentDidUpdate(prevProps) {
      const { location: { search: prevSearch } } = prevProps;
      const { location: { search } } = this.props;
      if (prevSearch !== search) {
        this.showOriginalFilter();
      }
    }

    onChangeStatus(e) {
      this.setState({ status: e.target.value, changed: true });
    }

    showOriginalFilter() {
      const { location: { search } } = this.props;
      const params = new URLSearchParams(search);
      this.setState({
        status: params.get('status') || '',
        changed: false,
      });
    }

    ApplyFilter() {
      const { status } = this.state;
      const { history } = this.props;
      history.push({
        pathname: '/issues',
        search: status ? `?status=${status}` : '',
      });
    }

    render() {
      const { status, changed } = this.state;
      const { classes } = this.props;
      return (
      <div className="alignmentModel">
          Status:
          {' '}
          <Select
            value={status}
            onChange={this.onChangeStatus}
            input={<BootstrapInput />}
          >
              <MenuItem value="">(All)</MenuItem>
              <MenuItem value="New">New</MenuItem>
              <MenuItem value="Assigned">Assigned</MenuItem>
              <MenuItem value="Fixed">Fixed</MenuItem>
              <MenuItem value="Closed">Closed</MenuItem>
          </Select>
          {' '}
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={this.ApplyFilter}
          >
            Apply
          </Button>
          {' '}
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<RefreshIcon />}
            onClick={this.showOriginalFilter}
            disabled={!changed}
          >
            Reset
          </Button>
      </div>
      );
    }
  },
));
