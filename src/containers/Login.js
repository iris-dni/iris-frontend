import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { ssoProviders, authSettings } from 'settings';
import Login from 'components/Login';

const LoginContainer = withRouter(React.createClass({
  componentWillUpdate (nextProps) {
    const redirectAfterLogin = this.props.location.query.next || authSettings.afterLoginPath;

    if (nextProps.me) {
      this.props.router.replace(redirectAfterLogin);
    }
  },

  render () {
    return <Login location={this.props.location} ssoProviders={ssoProviders} />;
  }
}));

export const mapStateToProps = ({ me }) => ({
  me
});

export default connect(
  mapStateToProps
)(LoginContainer);
