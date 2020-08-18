/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
// Bootstrap
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
// The form import should take care of all of the
// need form imports
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Data Import
import graphQLFetch from './graphQLFetch';
// my component imports
import NumInput from './controls/NumInput.jsx';
import DateInput from './controls/DateInput.jsx';
import TextInput from './controls/TextInput.jsx';


export default class IssueEdit extends React.Component {
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
          <table>

              <tbody>
                <tr>
                  <td width="10%">
                    Created
                  </td>
                  <td>
                    <TextInput
                      name="created"
                      value={created}
                      onChange={this.onChange}
                      key={id}
                    />
                </td>
                </tr>
                <tr>
                  <td>
                    Status
                  </td>
                  <td>
                    <select name="status" value={status} onChange={this.onChange} key={id}>
                      <option value="New">New</option>
                      <option value="Assigned">Assigned</option>
                      <option value="Fixed">Fixed</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    Owner
                  </td>
                  <td>
                    <TextInput
                      name="owner"
                      value={owner}
                      onChange={this.onChange}
                      key={id}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    Effort
                  </td>
                  <td>
                    <NumInput
                      name="effort"
                      value={effort}
                      onChange={this.onChange}
                      key={id}
                      />
                  </td>
                </tr>
                <tr>
                  <td>
                    Due
                  </td>
                  <td>
                    <DateInput
                      name="due"
                      value={due}
                      onChange={this.onChange}
                      onValidityChange={this.onValidityChange}
                      key={id}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    Title
                  </td>
                  <td>
                    <TextInput
                      name="title"
                      value={title}
                      onChange={this.onChange}
                      key={id}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    Description
                  </td>
                  <td>
                    <TextInput
                      tag="textarea"
                      rows={18}
                      cols={125}
                      name="description"
                      value={description}
                      onChange={this.onChange}
                      />
                  </td>
                </tr>
                <tr>
                  <td>

                  </td>
                  <td align="right">
                    <button
                        type="submit"
                      >
                      Apply
                    </button>
                  </td>
                </tr>
              </tbody>

          </table>
          {validationMessage}
          <Link to={`/edit/${id - 1}`}>Prev</Link>
          {' | '}
          <Link to={`/edit/${id + 1}`}>Next</Link>
        </form>
    );
  }
}
