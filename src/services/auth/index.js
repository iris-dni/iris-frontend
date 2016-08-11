import React from 'react';
import { withRouter } from 'react-router';
import isSignedIn from './isSignedIn';
import authRepository from '../api/repositories/auth';

const Auth = (WrappedComponent) => withRouter(React.createClass({

  getInitialState: () => ({
    me: null,
    finishedLoading: false
  }),

  componentWillMount () {
    // @TODO:
    // 1. stash current path for redirecting later
    // 2. Call whoami API endpoint to fetch current user
    let state = {
      me: null,
      finishedLoading: true
    };

    authRepository.whoAmI()
      .then(response => {
        // 3. Set state with current user data
        console.log(response);
        if (response.status === 'ok') {
          state.me = response.data;
        }
        this.setState(state);
        console.log(state);
      })
      .catch(() => {
        this.setState(state);
      });
  },

  showLoginPage () {
    setTimeout(() => {
      this.props.router.push('/auth/login');
    }, 6);
  },

  render () {
    if (this.state.finishedLoading) {
      if (isSignedIn(this.state.me)) {
        return (
          <WrappedComponent {...this.props} />
        );
      } else {
        this.showLoginPage();
      }
    }
    return <div />;
  }
}));

export default Auth;
