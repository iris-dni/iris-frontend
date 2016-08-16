import React from 'react';
import { withRouter } from 'react-router';
import authenticated from 'services/auth';

const Restricted = () => (
  <div>Welcome User!</div>
);

export default authenticated(withRouter(Restricted));
