/* eslint-disable linebreak-style */
/* eslint-disable radix */
/* eslint-disable react/prop-types */
import React from 'react';

import graphQLFetch from './graphQLFetch.js';
import Toasts from './Toasts.jsx';

export default class IssueDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      issue: {},
      toastVisible: false,
      toastMessage: ' ',
      toastType: 'info',
    };

    this.showError = this.showError.bind(this);
    this.dismissToast = this.dismissToast.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    const { match: { params: { id: prevId } } } = prevProps;
    const { match: { params: { id } } } = this.props;
    if (prevId !== id) {
      this.loadData();
    }
  }

  async loadData() {
    const { match: { params: { id } } } = this.props;
    const query = `query issue($id: Int!) {
          issue (id: $id) {
              id description
          }
      }`;

    const data = await graphQLFetch(query, { id: parseInt(id) }, this.showError);
    if (data) {
      this.setState({ issue: data.issue });
    } else {
      this.setState({ issue: {} });
    }
  }

  showError(message) {
    this.setState({
      toastVisible: true,
      toastMessage: message,
      toastType: 'danger',
    });
  }

  dismissToast() {
    this.setState({ toastVisible: false });
  }

  render() {
    const { issue: { description } } = this.state;
    const { toastVisible, toastMessage, toastType } = this.state;
    return (
      <div className="text-area">
        <h3>Description</h3>
        <pre>{description}</pre>
        <Toasts
          showing={toastVisible}
          onDismiss={this.dismissToast}
          type={toastType}
        >
          {toastMessage}
        </Toasts>
      </div>
    );
  }
}
