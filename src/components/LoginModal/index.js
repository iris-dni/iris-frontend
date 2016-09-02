import React from 'react';
import settings from 'settings';
import SsoProviders from 'components/SsoProviders';
import ModalIntro from 'components/ModalIntro';

const LoginModal = ({ title, intro, ssoProviders }) => (
  <div>
    <ModalIntro
      title={title || settings.loginPage.title}
      intro={intro || settings.loginPage.intro}
    />
    <SsoProviders providers={ssoProviders} />
  </div>
);

export default LoginModal;
