import React from 'react';
import { withRouter } from 'react-router';
import ssoProviders from 'settings/ssoProviders';
import isSignedIn from './isSignedIn';
import ApiClient from '../api/client';

const baseUrl = () => {
  return 'http://localhost:8000/auth/login';
};

const ssoLoginUrl = ({ loginUrl }) => {
  let delimiter = loginUrl.indexOf('?') < 0 ? '?' : '&';
  return `${loginUrl}${delimiter}irisreturl=${baseUrl()}`;
};

export default withRouter(React.createClass({

  componentWillMount () {
    ApiClient.request('/auth/whoami').then(response => {
      if (response.status === 'ok') {
        if (isSignedIn(response.data)) {
          this.props.router.replace('/');
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
