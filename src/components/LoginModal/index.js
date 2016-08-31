import React from 'react';
import styles from './login-modal.scss';
import settings from 'settings';
import SsoProviders from 'components/SsoProviders';
import ModalIntro from 'components/ModalIntro';

const LoginModal = ({ ssoProviders }) => (
  <div className={styles.root}>
    <ModalIntro title={'Nearly there'} intro={settings.loginPage.intro} />
    <SsoProviders providers={ssoProviders} />
  </div>
);

export default LoginModal;
