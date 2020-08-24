/* eslint-disable linebreak-style */
let aboutMessage = 'Issue Tracker API v1.5.1';

function setAboutMessage(_, { message }) {
  aboutMessage = message;
  return aboutMessage;
}
function getMessage() {
  return aboutMessage;
}

module.exports = { getMessage, setAboutMessage };
