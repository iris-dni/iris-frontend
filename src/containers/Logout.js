import React from 'react';
import { withRouter } from 'react-router';
import { logout } from '../services/api/repositories/auth';
import { authSettings } from 'settings';

export default withRouter(React.createClass({
  componentWillMount () {
    logout().then(() => {
      this.props.router.replace(authSettings.afterLogoutPath);
    });
  },

  render () {
    return null;
  }
}));
