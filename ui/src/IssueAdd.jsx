/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
// Bootstrap
import Button from 'react-bootstrap/Button';
// The form import should take care of all of the
// need form imports
import Form from 'react-bootstrap/Form';

export default class IssueAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.issueAdd;
    const issue = {
      owner: form.owner.value,
      title: form.title.value,
      due: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10),
    };
    const { createIssue } = this.props;
    createIssue(issue);
    form.owner.value = '';
    form.title.value = '';
  }

  render() {
    return (
      <div>
        <Form inline name="issueAdd" onSubmit={ this.handleSubmit }>
          <Form.Group>
            <Form.Label className="my-1 mr-2">Owner:</Form.Label>
            {' '}
            <Form.Control type="text" name="owner" className="my-1 mr-sm-2"/>
          </Form.Group>
          <Form.Group>
            <Form.Label className="my-1 mr-2">Title:</Form.Label>
            {' '}
            <Form.Control type="text" name="title" className="my-1 mr-sm-2"/>
          </Form.Group>
          <Button variant="primary" type="submit" className="my-1">Add</Button>
        </Form>
      </div>
    );
  }
}

IssueAdd.propTypes = {
  createIssue: PropTypes.func.isRequired,
};
