import React from 'react';
import { withRouter } from 'react-router';
import { logout } from '../services/api/repositories/auth';

export default withRouter(React.createClass({
  componentWillMount () {
    const redirectAfterLogout = '/';

    logout().then(() => {
      this.props.router.replace(redirectAfterLogout);
    });
  },

  render () {
    return null;
  }
}));
