import React from 'react';
import { loginPage, ssoProviders } from 'settings';
import Container from 'components/Container';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import SsoProviders from 'components/SsoProviders';
import generateSsoProviders from 'helpers/generateSsoProviders';
import getReturnUrlFromLocation from 'helpers/getReturnUrlFromLocation';

const LoginPage = ({ location }) => (
  <Container>
    <Header>
      <PageTitle
        title={loginPage.title}
        intro={loginPage.intro}
        centered
      />
    </Header>
    <SsoProviders providers={generateSsoProviders(
      ssoProviders,
      getReturnUrlFromLocation(location)
    )} />
  </Container>
);

export default LoginPage;
