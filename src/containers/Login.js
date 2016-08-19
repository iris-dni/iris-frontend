import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { ssoProviders, authSettings } from 'settings';
import SsoLink from 'components/SsoLink';

const Login = withRouter(React.createClass({
  componentWillUpdate (nextProps) {
    const redirectAfterLogin = this.props.location.query.next || authSettings.afterLoginPath;

    if (nextProps.me) {
      this.props.router.replace(redirectAfterLogin);
    }
  },

  render () {
    return (
      <div>
        <h1>Login first!</h1>
        <ul>
          {ssoProviders.map(provider => (
            <li key={provider.loginUrl}>
              <SsoLink {...this.props} provider={provider} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}));

export const mapStateToProps = ({ me, routing }) => ({ me, routing });

export default connect(
  mapStateToProps
)(Login);
