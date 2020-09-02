/* eslint-disable import/no-named-as-default-member */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable linebreak-style */
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { LinkContainer } from 'react-router-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './Auth/LoginButton.jsx';
import LogoutButton from './Auth/LogoutButton.jsx';

import Contents from './Contents.jsx';
import IssueAddNavItem from './IssueAddNavItem.jsx';
import Search from './Search.jsx';

function NavBar() {
  const AuthNav = () => {
    const { isAuthenticated } = useAuth0();

    return (
      <Nav className="justify-content-end">
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </Nav>
    );
  };
  return (
    <Navbar fluid="true" className="navbar-expand-lg navbar navbar-dark bg-dark">
      <Navbar.Brand>Issue Tracker</Navbar.Brand>
      <Nav className="mr-auto nav nav-dark bg-dark">
        <LinkContainer exact to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/issues">
          <Nav.Link>Issue List</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/report">
          <Nav.Link>Report</Nav.Link>
        </LinkContainer>
        <NavDropdown
          id="user-dropdown"
          title="More"
        >
          <LinkContainer to="/about" className="text-dark">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
        </NavDropdown>
      </Nav>
      <Col sm={5}>
        <Form inline>
          <Search />
        </Form>
      </Col>
      <Nav className="nav nav-dark bg-dark justify-content-end">
        <NavItem>
          <IssueAddNavItem />
        </NavItem>
        <NavItem>
          <AuthNav />
        </NavItem>
      </Nav>
    </Navbar>
  );
}

function Footer() {
  return (
    <small>
      <p className="text-center">
        Full Source Code available at this
        {' '}
        <a href="https://github.com/petelc/Issue-Tracker">GitHub Repository</a>
      </p>
    </small>
  );
}

export default function Page() {
  return (
    <div>
      <NavBar />
      <Row />
      <Container fluid="true">
        <div className="spacer" />
        <Contents />
      </Container>
      <Footer />
    </div>
  );
}
