import React from 'react';
import settings from 'settings';
import styles from './trust.scss';
import Container from 'components/Container';
import FormWrapper from 'components/FormWrapper';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import TrustForm from 'components/TrustForm';
import SsoProviders from 'components/SsoProviders';
import generateSsoProviders from 'helpers/generateSsoProviders';
import getReturnUrlFromLocation from 'helpers/getReturnUrlFromLocation';

const Trust = ({
  isLoggedIn,
  petition,
  location
}) => (
  <Container>
    <FormWrapper>
      <Header>
        <div className={styles['form-title-wrapper']}>
          <PageTitle
            title={settings.trustPage.title}
            intro={settings.trustPage.intro}
          />
        </div>
      </Header>
      <div className={styles.form}>
        <p>You are supporting {petition.title}</p>
        {!isLoggedIn &&
          <SsoProviders providers={generateSsoProviders(
            settings.ssoProviders,
            getReturnUrlFromLocation(location)
          )} />
        }
        <TrustForm />
      </div>
    </FormWrapper>
  </Container>
);

export default Trust;
