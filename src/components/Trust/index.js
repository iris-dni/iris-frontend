import React from 'react';
import settings from 'settings';
import styles from './trust.scss';
import Container from 'components/Container';
import FormWrapper from 'components/FormWrapper';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import TrustForm from 'components/TrustForm';

const Trust = ({ petition }) => (
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
        <TrustForm />
      </div>
    </FormWrapper>
  </Container>
);

export default Trust;
