import React from 'react';
import { withRouter } from 'react-router';
import authRepository from '../api/repositories/auth';

export default withRouter(React.createClass({
  componentWillMount () {
    const redirectAfterLogout = '/';

    authRepository.logout().then(response => {
      this.props.router.replace(redirectAfterLogout);
    });
  },

  render () {
    return null;
  }
}));
