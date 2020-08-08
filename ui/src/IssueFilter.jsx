/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint "react/prefer-stateless-function": "off" */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default class IssueFilter extends React.Component {
  render() {
    return (
      <div className="masterContainer">
          <Link to="/#/issues">
            <Button variant="outlined">
              All Issues
            </Button>
          </Link>
          { ' | '}
          <Link to={{ pathname: '/issues', search: '?status=New' }}>
            <Button variant="outlined">
              New Issues
            </Button>
          </Link>
          { ' | '}
          <Link to={{ pathname: '/issues', search: '?status=Assigned' }}>
            <Button variant="outlined">
              Assigned Issues
            </Button>
          </Link>
      </div>
    );
  }
}
