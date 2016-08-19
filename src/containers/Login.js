import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { ssoProviders, authSettings } from 'settings';

const returnUrlParam = ({ pathname, search }) => {
  const baseUrl = process.env.BASE_URL;

  if (!baseUrl) {
    throw new Error('Please define a BASE_URL in .env');
  }

  return encodeURIComponent(`${baseUrl}${pathname}${decodeURIComponent(search)}`);
};

const ssoLoginUrl = ({ loginUrl }, location) => {
  const delimiter = loginUrl.indexOf('?') < 0 ? '?' : '&';
  return `${loginUrl}${delimiter}irisreturl=${returnUrlParam(location)}`;
};

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
              <a href={ssoLoginUrl(provider, this.props.location)}>{provider.name}</a>
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
