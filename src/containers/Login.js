import React from 'react';
import { withRouter } from 'react-router';
import { whoAmI } from '../services/api/repositories/auth';
import ssoProviders from 'settings/ssoProviders';

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

export default withRouter(React.createClass({

  componentWillMount () {
    const redirectAfterLogin = this.props.location.query.next || '/';

    whoAmI().then(response => {
      if (response.status === 'ok') {
        this.props.router.replace(redirectAfterLogin);
      }
    });
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
