/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Toasts from './Toasts.jsx';

export default function withToasts(OriginalComponent) {
  return class ToastWrapper extends React.Component {
    constructor(props) {
      super(props);
      this.state = { toastVisible: false, toastMessage: '', toastType: 'success' };
      this.showSuccess = this.showSuccess.bind(this);
      this.showError = this.showError.bind(this);
      this.dismissToast = this.dismissToast.bind(this);
    }

    showSuccess(message) {
      this.setState({
        toastVisible: true,
        toastMessage: message,
        toastType: 'success',
      });
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
      const { toastVisible, toastMessage, toastType } = this.state;
      return (
        <>
          <OriginalComponent
            showError={this.showError}
            showSuccess={this.showSuccess}
            dismissToast={this.dismissToast}
            {...this.props}
          />
          <Toasts
            showing={toastVisible}
            onDismiss={this.dismissToast}
            type={toastType}
          >
            {toastMessage}
          </Toasts>
        </>
      );
    }
  };
}
