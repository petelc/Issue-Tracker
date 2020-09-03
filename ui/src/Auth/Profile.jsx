import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useAuth0 } from '@auth0/auth0-react';
// import Highlight from './HighLight.jsx';
// import Loading from './Loading.jsx';

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3-md-0"
          />
        </Col>
        <Col md>
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
