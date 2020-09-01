/* eslint-disable linebreak-style */
/* eslint "react/react-in-jsx-scope": "off" */
/* eslint "react/jsx-no-undef": "off" */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from '../src/Config/Auth0ProviderWithHistory.jsx';

import Page from '../src/Page.jsx';
import store from '../src/store.js';

// eslint-disable-next-line no-underscore-dangle
store.initialData = window.__INITIAL_DATA__;

// const element = <IssueList />;
const element = (
  <Router>
    <Auth0ProviderWithHistory>
      <Page />
    </Auth0ProviderWithHistory>
  </Router>
);

ReactDOM.hydrate(element, document.getElementById('content'));
if (module.hot) {
  module.hot.accept();
}
