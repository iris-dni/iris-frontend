import React from 'react';
import { translation } from 'translations';
import SsoProviders from 'components/SsoProviders';
import ModalIntro from 'components/ModalIntro';

const LoginModal = ({ title, intro, ssoProviders }) => (
  <div>
    <ModalIntro
      title={title || translation('loginPage.title')}
      intro={intro || translation('loginPage.intro')}
    />
    <SsoProviders providers={ssoProviders} />
  </div>
);

export default LoginModal;
