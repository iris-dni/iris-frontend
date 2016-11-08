import React from 'react';
import { setting } from 'settings';
import { translation } from 'translations';
import Container from 'components/Container';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import SsoProviders from 'components/SsoProviders';
import generateSsoProviders from 'helpers/generateSsoProviders';
import getReturnUrlFromLocation from 'helpers/getReturnUrlFromLocation';

const LoginPage = ({ location }) => (
  <Container>
    <Header padding>
      <PageTitle
        title={translation('loginPage.title')}
        intro={translation('loginPage.intro')}
        centered
      />
    </Header>
    <SsoProviders providers={generateSsoProviders(
      setting('ssoProviders', []),
      getReturnUrlFromLocation(location)
    )} />
  </Container>
);

export default LoginPage;
