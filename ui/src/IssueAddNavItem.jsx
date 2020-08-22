/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { withRouter } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
  BsPlusCircle, // BsChevronDoubleDown,
} from 'react-icons/bs';
import graphQLFetch from './graphQLFetch';
import Toasts from './Toasts.jsx';

class IssueAddNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false,
      toastVisible: false,
      toastMessage: ' ',
      toastType: 'success',
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showError = this.showError.bind(this);
    this.dismissToast = this.dismissToast.bind(this);
  }

  showModal() {
    this.setState({ showing: true });
  }

  hideModal() {
    this.setState({ showing: false });
  }

  showError(message) {
    this.setState({
      toastVisible: true,
      toastMessage: message,
      toastType: 'danger',
    });
  }

  dismissToast() {
    this.setState({ toastVisible: false });
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.hideModal();
    const form = document.forms.issueAdd;
    const issue = {
      owner: form.owner.value,
      title: form.title.value,
      due: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10),
    };

    const query = `mutation issueAdd($issue: IssueInputs!) {
        issueAdd(issue: $issue) {
            id
        }
    }`;

    const data = await graphQLFetch(query, { issue }, this.showError);
    if (data) {
      const { history } = this.props;
      history.push(`/edit/${data.issueAdd.id}`);
    }
  }

  render() {
    const { showing } = this.state;
    const { toastVisible, toastMessage, toastType } = this.state;
    return (
        <React.Fragment>
            <Nav.Link onClick={this.showModal}>
                <OverlayTrigger
                    placement="bottom"
                    delayShow={1000}
                    overlay={<Tooltip id="create-issue">Create Issue</Tooltip>}
                >
                    <BsPlusCircle />
                </OverlayTrigger>
            </Nav.Link>
            <Modal
                keyboard
                show={showing}
                onHide={this.hideModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Create Issue
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form name="issueAdd">
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                name="title"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Owner</Form.Label>
                            <Form.Control
                                name="owner"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <ButtonToolbar>
                        <Button
                            type="button"
                            variant="primary"
                            onClick={this.handleSubmit}
                            >
                                Submit
                            </Button>
                            <Button variant="link" onClick={this.hideModal}>Close</Button>
                    </ButtonToolbar>
                </Modal.Footer>
            </Modal>
            <Toasts
                showing={toastVisible}
                onDismiss={this.dismissToast}
                type={toastType}
                >
                {toastMessage}
            </Toasts>
        </React.Fragment>
    );
  }
}

export default withRouter(IssueAddNavItem);
