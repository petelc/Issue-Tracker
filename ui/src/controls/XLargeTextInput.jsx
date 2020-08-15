/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
// Handle Material UI
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing(1),
  },
});

function format(text) {
  return text != null ? text : '';
}

function unformat(text) {
  return text.trim().length === 0 ? null : text;
}

export default withStyles(styles)(
  class XLargeTextInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: format(props.value),
      };
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
      const {
        name, multiline, fullwidth, variant, rows,
      } = this.props;
      // const { tag = 'input', ...props } = this.props;
      const { classes } = this.props;
      const inputProps = {
        'aria-label': { value },
      };
      return (
        <FormControl
            className={clsx(
              classes.root,
            )}
        >
          <TextField
            id={`standard-adornment-${name}`}
            name={name}
            fullWidth={fullwidth}
            multiline={multiline}
            rows={rows}
            variant={variant}
            value={value}
            onChange={this.onChange}
            aria-describedby={`standard-${name}-helper-text`}
            inputProps={inputProps}
          />
        </FormControl>
      );
    }
  },
);
