import React from 'react';
import { withRouter } from 'react-router';

const Auth = (WrappedComponent) => withRouter(React.createClass({

  render () {
    if (true) {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }
}));

export default Auth;
