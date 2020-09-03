/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
// Bootstrap
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { LinkContainer } from 'react-router-bootstrap';
import Alert from 'react-bootstrap/Alert';
import props from 'prop-types';
// Local Imports
import graphQLFetch from './graphQLFetch.js';
import store from './store.js';
import withToasts from './withToasts.jsx';

function format(num) {
  return num != null ? num.toString() : '';
}

function unformat(str) {
  const val = parseInt(str, 10);
  return Number.isNaN(val) ? null : val;
}

class IssueEdit extends React.Component {
  static async fetchData(match, search, showError) {
    const query = `query issue($id: Int!) {
      issue(id: $id) {
        id title status owner
        effort created due description
      }
    }`;
    let { params: { id } } = match;
    id = parseInt(id, 10);
    const result = await graphQLFetch(query, { id }, showError);
    return result;
  }

  constructor() {
    super();
    const issue = store.initialData ? store.initialData.issue : null;
    delete store.initialData;
    this.state = {
      issue,
      invalidFields: {},
      value: format(props.value),
      showingValidation: false,
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onValidityChange = this.onValidityChange.bind(this);
    this.showValidation = this.showValidation.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onEffortChange = this.onEffortChange.bind(this);
  }

  componentDidMount() {
    const { issue } = this.state;
    if (issue == null) this.loadData();
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
    let value;
    if (name === 'effort') {
      value = unformat(textValue);
    } else {
      value = naturalValue === undefined ? textValue : naturalValue;
    }
    this.setState((prevState) => ({
      issue: { ...prevState.issue, [name]: value },
    }));
  }

  onBlur(e) {
    const { onChange } = this.props;
    const { value } = this.state;
    onChange(e, unformat(value));
  }

  onEffortChange(e) {
    if (e.target.value.match(/^\d*$/)) {
      this.setState({ value: e.target.value });
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

  async handleSubmit(e) {
    e.preventDefault();
    this.showValidation();
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
    const { showSuccess, showError } = this.props;
    const data = await graphQLFetch(query, { changes, id }, showError);
    if (data) {
      this.setState({ issue: data.issueUpdate });
      showSuccess('Updated Issue Successfully');
    }
  }

  async loadData() {
    const { match, showError } = this.props;
    const data = await IssueEdit.fetchData(match, null, showError);
    this.setState({ issue: data ? data.issue : {}, invalidFields: {} });
  }

  showValidation() {
    this.setState({ showingValidation: true });
  }

  dismissValidation() {
    this.setState({ showingValidation: false });
  }

  render() {
    const { issue } = this.state;
    if (issue == null) return null;
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
    const { invalidFields, showingValidation } = this.state;
    let validationMessage;
    if (Object.keys(invalidFields).length !== 0 && showingValidation) {
      validationMessage = (
        <Alert variant="danger" dismissible>
          <Alert.Heading>Danger Will Robinson!</Alert.Heading>
          <p>
            Please correct invalid fields before submitting.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={this.dismissValidation} variant="outline-danger">
              BAM!
            </Button>
          </div>
        </Alert>
      );
    }
    return (
      <Card>
        <Card.Header>{`Editing issue: ${id}`}</Card.Header>
        <Card.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group>
                <Col sm={3}>
                  <Form.Label>Created</Form.Label>
                </Col>
                <Col sm={12}>
                  <Form.Control
                    name="created"
                    value={created.toDateString()}
                    onChange={this.onChange}
                    key={id}
                  />
                </Col>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Col sm={3}>
                  <Form.Label>
                    Status
                  </Form.Label>
                </Col>
                <Col sm={12}>
                  <Form.Control
                    as="select"
                    name="status"
                    value={status}
                    onChange={this.onChange}
                    custom
                  >
                    <option value="New">New</option>
                    <option value="Assigned">Assigned</option>
                    <option value="Fixed">Fixed</option>
                    <option value="Closed">Closed</option>
                  </Form.Control>
                </Col>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Col sm={3}>
                  <Form.Label>
                    Owner
                  </Form.Label>
                </Col>
                <Col sm={12}>
                  <Form.Control
                    name="owner"
                    value={owner}
                    onChange={this.onChange}
                    key={id}
                  />
                </Col>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Col sm={3}>
                  <Form.Label>
                    Effort
                  </Form.Label>
                </Col>
                <Col sm={9}>
                  <Form.Control
                    name="effort"
                    value={effort}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    key={id}
                  />
                </Col>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group validationstate={
              invalidFields.due ? 'error' : null
            }
              >
                <Col sm={3}>
                  <Form.Label>
                    Due
                  </Form.Label>
                </Col>
                <Col sm={12}>
                  <Form.Control
                    name="due"
                    value={due.toDateString()}
                    onChange={this.onChange}
                    key={id}
                  />
                  <FormControl.Feedback type="invalid">
                    Please provide a Due Date
                  </FormControl.Feedback>
                </Col>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Col sm={3}>
                  <Form.Label>
                    Title
                  </Form.Label>
                </Col>
                <Col sm="auto">
                  <Form.Control
                    as="textarea"
                    cols={125}
                    rows={1}
                    name="title"
                    value={title}
                    onChange={this.onChange}
                    key={id}
                  />
                </Col>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Col sm={3}>
                  <Form.Label>
                    Description
                  </Form.Label>
                </Col>
                <Col sm="auto">
                  <Form.Control
                    as="textarea"
                    rows={12}
                    cols={125}
                    name="description"
                    value={description}
                    onChange={this.onChange}
                    key={id}
                  />
                </Col>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Col sm="auto" />
                <Col className="mr-auto" sm="auto">
                  <ButtonToolbar>
                    <ButtonGroup className="mr-2">
                      <LinkContainer to="/issues">
                        <Button variant="secondary">
                          Back
                        </Button>
                      </LinkContainer>
                      {'   '}
                      <Button variant="success" type="submit">
                        Submit
                      </Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                </Col>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Col sm={3} />
                <Col sm="auto">
                  {validationMessage}
                </Col>
              </Form.Group>
            </Form.Row>
          </Form>
        </Card.Body>
        <Card.Footer>
          <Link to={`/edit/${id - 1}`}>Prev</Link>
          {' | '}
          <Link to={`/edit/${id + 1}`}>Next</Link>
        </Card.Footer>
      </Card>

    );
  }
}

const IssueEditWithToasts = withToasts(IssueEdit);
IssueEditWithToasts.fetchData = IssueEdit.fetchData;
export default IssueEditWithToasts;
