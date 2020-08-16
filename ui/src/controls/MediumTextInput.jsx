/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
// Handle Material UI
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
// import FormHelperText from '@material-ui/core/FormHelperText';
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

function format(text) {
  return text != null ? text : '';
}

function unformat(text) {
  return text.trim().length === 0 ? null : text;
}

export default withStyles(styles)(
  class MediumTextInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: format(props.value) };
      this.onBlur = this.onBlur.bind(this);
      this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
      this.setState({ value: e.target.value });
    }

    onBlur(e) {
      const { onChange } = this.props;
      const { value } = this.state;
      onChange(e, unformat(value));
    }

    render() {
      const { value } = this.state;
      // const { tag = 'input', ...props } = this.props;
      const { classes } = this.props;
      return (
        <FormControl
            className={clsx(
              classes.root,
              classes.input,
            )}
        >
        <Input
            id={`standard-adornment-${value}`}
            value={value}
            aria-describedby={`standard-${value}-helper-text`}
            inputProps={{
              'aria-label': { value },
            }}
        />
        </FormControl>
      );
    }
  },
);
