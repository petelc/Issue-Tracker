/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable linebreak-style */
import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {
  BsPlusCircle, // BsChevronDoubleDown,
} from 'react-icons/bs';
import { LinkContainer } from 'react-router-bootstrap';

import Contents from './Contents.jsx';

function NavBar() {
  return (
    <Navbar className="navbar-expand-lg navbar navbar-dark bg-dark">
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
          className="dropdown-menu-lg-right"
          size="lg"
        >
          <NavDropdown.Item>Action</NavDropdown.Item>
          <NavDropdown.Item>Reaction</NavDropdown.Item>
          <NavDropdown.Item>Subtraction</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav className="nav nav-dark bg-dark">
        <Nav.Link>
          <OverlayTrigger
            placement="bottom"
            delayShow={1000}
            overlay={<Tooltip id="create-issue">Create Issue</Tooltip>}
            >
              <BsPlusCircle />
            </OverlayTrigger>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

function Footer() {
  return (
    <small>
      <p className = "text-center">
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
            <NavBar/>
            <Row></Row>
            <Container fluid>
              <div className="spacer"></div>
              <Contents />
            </Container>
            <Footer />
        </div>
  );
}
