import React from 'react';
import SsoProviders from 'components/SsoProviders';

const LoginModal = ({ ssoProviders }) => (
  <SsoProviders providers={ssoProviders} />
);

export default LoginModal;
