/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable linebreak-style */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import routes from './routes.js';

// So to make the protect route stuff I need to remove IssueEdit from routes.js
// and add in the route below the {routes.map...} line.
export default function Contents() {
  return (
    <Switch>
      <Redirect exact from="/" to="/issues" />
      {routes.map((attrs) => <Route {...attrs} key={attrs.path} />)}
    </Switch>
  );
}
