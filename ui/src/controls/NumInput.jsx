/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
// Handle Material UI
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
// import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing(1),
  },
  input: {
    width: '20ch',
  },
});

function format(num) {
  return num != null ? num.toString() : '';
}

function unformat(str) {
  const val = parseInt(str, 10);
  return Number.isNaN(val) ? null : val;
}

export default withStyles(styles)(
  class NumInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: format(props.value) };
      this.onBlur = this.onBlur.bind(this);
      this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
      if (e.target.value.match(/^\d*$/)) {
        this.setState({ value: e.target.value });
      }
    }

    onBlur(e) {
      const { onChange } = this.props;
      const { value } = this.state;
      onChange(e, unformat(value));
    }

    render() {
      const { value } = this.state;
      const { classes } = this.props;
      return (
          <FormControl
            className={clsx(
              classes.root,
              classes.input,
            )}
          >
            <Input
              id="standard-adornment-effort"
              {...this.props}
              value={value}
              onBlur={this.onBlur}
              onChange={this.onChange}
              aria-describedby="standard-effort-helper-text"
              inputProps={{
                'aria-label': 'effort',
              }}
            />
            <FormHelperText id="standard-effort-helper-text">
              Effort
            </FormHelperText>
          </FormControl>
      );
    }
  },
);
