import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { authSettings } from 'settings';
import CheckAuth from 'components/CheckAuth';
import Login from 'components/Login';
import generateSsoProviders from 'helpers/generateSsoProviders';
import getReturnUrlFromLocation from 'helpers/getReturnUrlFromLocation';

const LoginContainer = withRouter(React.createClass({
  componentWillUpdate (nextProps) {
    const redirectAfterLogin = this.props.location.query.next || authSettings.afterLoginPath;
    if (nextProps.me && nextProps.me.id) {
      this.props.router.replace(redirectAfterLogin);
    }
  },

  render () {
    return (
      <CheckAuth me={this.props.me}>
        <Login ssoProviders={generateSsoProviders(
          getReturnUrlFromLocation(this.props.location)
        )} />
      </CheckAuth>
    );
  }
}));

export const mapStateToProps = ({ me }) => ({ me });

export default connect(
  mapStateToProps
)(LoginContainer);
