import React from 'react';
import { withRouter } from 'react-router';
import authRepository from '../api/repositories/auth';

const Auth = (WrappedComponent) => withRouter(React.createClass({

  getInitialState: () => ({
    me: null,
    finishedLoading: false
  }),

  componentWillMount () {
    if (__CLIENT__) {
      authRepository.whoAmI().then(response => {
        if (response.status === 'ok') {
          this.setState({
            me: response.data,
            finishedLoading: true
          });
        } else {
          const redirectAfterLogin = this.props.location.pathname;
          this.props.router.push(`/auth/login?next=${encodeURIComponent(redirectAfterLogin)}`);
        }
      });
    }
  },

  render () {
    if (this.state.finishedLoading) {
      return (
        <WrappedComponent {...this.props} />
      );
    }
    return <div />;
  }
}));

export default Auth;
