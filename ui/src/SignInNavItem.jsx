/* eslint-disable react/destructuring-assignment */
import React from 'react';
// import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
// import NavDropDown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import { GoThumbsup } from 'react-icons/go';
// Bring in the Auth0
import { withAuth0 } from '@auth0/auth0-react';
import withToasts from './withToasts.jsx';
import LoginButton from './Auth/LoginButton.jsx';
import LogoutButton from './Auth/LogoutButton.jsx';

class SignInNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false,
      // isAuthenticated: withAuth0.isAuthenticated,
      // user: withAuth0.user,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ showing: true });
  }

  hideModal() {
    this.setState({ showing: false });
  }

  render() {
    const AuthNav = () => {
      const { isAuthenticated } = withAuth0();

      return (
        <Nav className="justify-content-end">
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Nav>
      );
    };
    const { showing } = this.state;
    return (
      <>
        <NavItem onClick={this.showModal} className="bg-dark">
          {AuthNav}
          <Badge>
            <GoThumbsup />
          </Badge>
        </NavItem>
        <Modal keyboard show={showing} onHide={this.hideModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Sign In
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LoginButton />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="link" onClick={this.hideModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default withAuth0(withToasts(SignInNavItem));
