import React from 'react';
import settings from 'settings';
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
        title={settings.loginPage.title}
        intro={settings.loginPage.intro}
        centered
      />
    </Header>
    <SsoProviders providers={generateSsoProviders(
      settings.ssoProviders,
      getReturnUrlFromLocation(location)
    )} />
  </Container>
);

export default LoginPage;
