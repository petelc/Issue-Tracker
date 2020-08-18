/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
// Handle Material UI

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

export default class DateInput extends React.Component {
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
    return (
      <input
        type="text"
        size={20}
        name={name}
        className={className}
        value={displayValue}
        placeholder={focused ? 'yyyy-mm-dd' : null}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onChange={this.onChange}
      />
    );
  }
}
