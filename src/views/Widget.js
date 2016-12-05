import 'assets/styles/base.scss';
import React from 'react';
import Helmet from 'react-helmet';
import settings from 'settings';

const TITLE_TEMPLATE = `%s | ${settings.title}`;

export default ({ children }) => (
  <div className={'wrapper'}>
    <Helmet titleTemplate={TITLE_TEMPLATE} />
    <main
      role='main'
      aria-label='Content'>
      {children}
    </main>
  </div>
);
