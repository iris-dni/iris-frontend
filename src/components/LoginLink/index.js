import React from 'react';
import authRepository from 'services/api/repositories/auth';
import { Link } from 'react-router';

const loginLink = () => {
  return <Link to='/auth/login'>Login</Link>;
};

const logoutLink = () => {
  return <Link to='/auth/logout'>Logout</Link>;
};

const LoginLink = React.createClass({

  getInitialState: () => ({
    loggedIn: false,
    me: null
  }),

  componentWillMount () {
    if (__CLIENT__) {
      authRepository.whoAmI().then(response => {
        this.setState({
          loggedIn: response.status === 'ok',
          me: response.data
        });
      });
    }
  },

  render () {
    return this.state.loggedIn ? logoutLink() : loginLink();
  }
});

export default LoginLink;
