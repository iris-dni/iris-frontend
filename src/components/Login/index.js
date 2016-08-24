import React from 'react';
// import styles from './login.scss';
import Container from 'components/Container';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import SsoLink from 'components/SsoLink';

const Login = ({ ssoProviders }) => (
  <Container>
    <Header>
      <PageTitle
        title={'Nearly there...'}
        centered
      />
    </Header>
    <ul>
      {(ssoProviders || []).map(provider => (
        <li key={provider.loginUrl}>
          <SsoLink provider={provider} />
        </li>
      ))}
    </ul>
  </Container>
);

export default Login;
