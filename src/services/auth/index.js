import React from 'react';
import { withRouter } from 'react-router';
import isSignedIn from './isSignedIn';

const Auth = (WrappedComponent) => withRouter(React.createClass({

  getInitialState: () => ({
    me: null,
    finishedLoading: false
  }),

  componentWillMount () {
    // @TODO:
    // 1. stash current path for redirecting later
    // 2. Call whoami API endpoint to fetch current user
    // 3. Set state with current user data
    this.setState({
      me: null,
      finishedLoading: true
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
