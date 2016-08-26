import React from 'react';
import styles from './login.scss';
import settings from 'settings';
import Container from 'components/Container';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import TextCenter from 'components/TextCenter';
import SsoLink from 'components/SsoLink';

const Login = ({ ssoProviders }) => (
  <Container>
    <Header>
      <PageTitle
        title={settings.loginPage.title}
        intro={settings.loginPage.intro}
        centered
      />
    </Header>
    <TextCenter>
      <div className={styles.providers}>
        {(ssoProviders || []).map(provider => (
          <div key={provider.url}>
            <SsoLink
              url={provider.url}
              text={provider.text}
            />
          </div>
        ))}
      </div>
    </TextCenter>
  </Container>
);

export default Login;
