import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      variant="btn btn-dark link"
      onClick={() => logout({ returnTo: window.location.origin })}
      className="btn-margin"
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
