/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastHeader from 'react-bootstrap/ToastHeader';
import Collapse from 'react-bootstrap/Collapse';

export default class Toasts extends React.Component {
  componentDidUpdate() {
    const { showing, onDismiss } = this.props;
    if (showing) {
      clearTimeout(this.dismissTimer);
      setTimeout(onDismiss, 5000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.dismissTimer);
  }

  render() {
    const {
      showing, onDismiss, children,
    } = this.props;

    return (
      <Collapse in={showing}>
        <div
          style={{
            position: 'fixed',
            bottom: 20,
            left: 20,
            zIndex: 10,
          }}
        >
          <Toast show={showing} onClose={onDismiss}>
            <ToastHeader className="toast-header">
              <strong className="mr-auto">Issue Tracker</strong>
              <small>just now</small>
            </ToastHeader>
            <Toast.Body className="toast-body">{children}</Toast.Body>
          </Toast>
        </div>
      </Collapse>
    );
  }
}
