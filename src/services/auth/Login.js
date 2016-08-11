import React from 'react';
import { withRouter } from 'react-router';
import ssoProviders from 'settings/ssoProviders';
import isSignedIn from './isSignedIn';
import authRepository from '../api/repositories/auth';

const returnUrlParam = () => {
  const returnUrl = __SERVER__ ? '/' : window.location;
  return encodeURIComponent(returnUrl);
};

const ssoLoginUrl = ({ loginUrl }) => {
  let delimiter = loginUrl.indexOf('?') < 0 ? '?' : '&';
  return `${loginUrl}${delimiter}irisreturl=${returnUrlParam()}`;
};

export default withRouter(React.createClass({

  componentWillMount () {
    const redirectAfterLogin = this.props.location.query.next || '/';

    authRepository.whoAmI().then(response => {
      if (response.status === 'ok') {
        if (isSignedIn(response.data)) {
          this.props.router.replace(redirectAfterLogin);
        }
      }
    });
  },

  render: () => (
    <div>
      <h1>Login first!</h1>
      <ul>
        {ssoProviders.map(provider => (
          <li key={provider.loginUrl}><a href={ssoLoginUrl(provider)}>{provider.name}</a></li>
        ))}
      </ul>
    </div>
  )
}));
