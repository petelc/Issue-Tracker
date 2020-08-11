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
// for the text fields
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';

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
        effortMin: params.get('effortMin') || '',
        effortMax: params.get('effortMax') || '',
        changed: false,
      };
      this.onChangeStatus = this.onChangeStatus.bind(this);
      this.ApplyFilter = this.ApplyFilter.bind(this);
      this.showOriginalFilter = this.showOriginalFilter.bind(this);
      this.onChangeEffortMin = this.onChangeEffortMin.bind(this);
      this.onChangeEffortMax = this.onChangeEffortMax.bind(this);
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

    onChangeEffortMin(e) {
      const effortString = e.target.value;
      if (effortString.match(/^\d*$/)) {
        this.setState({ effortMin: e.target.value, changed: true });
      }
    }

    onChangeEffortMax(e) {
      const effortString = e.target.value;
      if (effortString.match(/^\d*$/)) {
        this.setState({ effortMax: e.target.value, changed: true });
      }
    }

    showOriginalFilter() {
      const { location: { search } } = this.props;
      const params = new URLSearchParams(search);
      this.setState({
        status: params.get('status') || '',
        effortMin: params.get('effortMin') || '',
        effortMax: params.get('effortMax') || '',
        changed: false,
      });
    }

    ApplyFilter() {
      const { status, effortMin, effortMax } = this.state;
      const { history } = this.props;

      const params = new URLSearchParams();
      if (status) params.set('status', status);
      if (effortMin) params.set('effortMin', effortMin);
      if (effortMax) params.set('effortMax', effortMax);

      const search = params.toString() ? `?${params.toString()}` : '';
      history.push({ pathname: '/issues', search });
    }

    render() {
      const { status, changed } = this.state;
      const { effortMin, effortMax } = this.state;
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
          Effort Between
          {' '}
          <TextField
            className={classes.margin}
            id="mineffort"
            label="Minimum Effort"
            value={effortMin}
            onChange={this.onChangeEffortMin}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VerticalAlignBottomIcon />
                </InputAdornment>
              ),
            }}
          />
          {'  '}
          <TextField
            className={classes.margin}
            id="maxeffort"
            label="Maximum Effort"
            value={effortMax}
            onChange={this.onChangeEffortMax}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VerticalAlignTopIcon />
                </InputAdornment>
              ),
            }}
          />
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
