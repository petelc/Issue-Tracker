/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint "react/prefer-stateless-function": "off" */
import React from 'react';

export default class IssueFilter extends React.Component {
  render() {
    return (
      <div className="masterContainer">
          <a href="/#/issues">All Issues</a>
          { ' | '}
          <a href="/#/issues?status=New">New Issues</a>
          { ' | '}
          <a href="/#/issues?status=Assigned">Assigned Issues</a>
      </div>
    );
  }
}
