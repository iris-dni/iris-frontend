import React from 'react';
import Container from 'components/Container';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import TextCenter from 'components/TextCenter';
import SsoLink from 'components/SsoLink';

const Login = ({ location, ssoProviders }) => (
  <Container>
    <Header>
      <PageTitle
        title={'Nearly there!'}
        intro={'To begin creating your Petition please sign in using one of the services below. Afterwards, you won\'t be required to enter any contact information.'}
        centered
      />
    </Header>
    <TextCenter>
      {ssoProviders.map(provider => (
        <div key={provider.loginUrl}>
          <SsoLink
            location={location}
            provider={provider}
          />
        </div>
      ))}
    </TextCenter>
  </Container>
);

export default Login;
