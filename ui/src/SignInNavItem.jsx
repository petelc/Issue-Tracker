import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NavDropDown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import { GoThumbsup } from 'react-icons/go';

export default class SignInNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false,
      user: { signedIn: false, givenName: '' },
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.signOut = this.signOut.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  signIn() {
    this.hideModal();
    this.setState({ user: { signedIn: true, givenName: 'User1' } });
  }

  signOut() {
    this.setState({ user: { signedIn: false, givenName: '' } });
  }

  showModal() {
    this.setState({ showing: true });
  }

  hideModal() {
    this.setState({ showing: false });
  }

  render() {
    const { user } = this.state;
    if (user.signedIn) {
      return (
        <NavDropDown title={user.givenName} id="user">
          <Nav.Link onClick={this.signOut}>
            Sign Out
          </Nav.Link>
        </NavDropDown>
      );
    }
    const { showing } = this.state;
    return (
      <>
        <NavItem onClick={this.showModal} className="bg-dark">
          <Button variant="btn btn-dark link">
            Sign In
            <Badge><GoThumbsup /></Badge>
          </Button>
        </NavItem>
        <Modal
          keyboard
          show={showing}
          onHide={this.hideModal}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Sign In
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button
              type="button"
              variant="dark"
              onClick={this.signIn}
            >
              Sign In
            </Button>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="link" onClick={this.hideModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
