/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
// Handle Material UI
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing(1),
  },
  input: {
    width: '35ch',
  },
});

function displayFormat(date) {
  return (date != null) ? date.toString() : '';
}

function editFormat(date) {
  return (date != null) ? date.toString() : '';
}

function unFormat(str) {
  const val = new Date(str);
  return Number.isNaN(val.getTime()) ? null : val;
}

export default withStyles(styles)(
  class DateInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: editFormat(props.value),
        focused: false,
        valid: true,
      };
      this.onFocus = this.onFocus.bind(this);
      this.onBlur = this.onBlur.bind(this);
      this.onChange = this.onChange.bind(this);
    }

    onFocus() {
      this.setState({ focused: true });
    }

    onBlur(e) {
      const { onValidityChange, onChange } = this.props;
      const { value, valid: oldValid } = this.state;
      const dateValue = unFormat(value);
      const valid = value === '' || dateValue != null;
      if (valid !== oldValid && onValidityChange) {
        onValidityChange(e, valid);
      }
      this.setState({ focused: false, valid });
      if (valid) onChange(e, dateValue);
    }

    onChange(e) {
      if (e.target.value.match(/^[\d]*$/)) {
        this.setState({ value: e.target.value });
      }
    }

    render() {
      const { valid, focused, value } = this.state;
      const { value: origValue, name } = this.props;
      const className = (!valid && !focused) ? 'invalid' : null;
      const displayValue = (focused || !valid) ? value : displayFormat(origValue);
      const { classes } = this.props;
      return (
        <FormControl
            className={clsx(
              classes.root,
              classes.input,
            )}
        >
            <Input
              id="standard-adornment-owner"
              name={name}
              className={className}
              value={displayValue}
              placeholder={focused ? 'yyyy-mm-dd' : ''}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onChange={this.onChange}
              aria-describedby={`standard-${name}-helper-text`}
              inputProps={{
                'aria-label': `${name}`,
              }}
            />
            <FormHelperText id={`standard-${name}-helper-text`}>
                {name}
            </FormHelperText>
        </FormControl>
      );
    }
  },
);
