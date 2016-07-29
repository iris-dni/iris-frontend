import 'assets/styles/reset.css';
import React from 'react';
import Helmet from 'react-helmet';
import { TITLE_TEMPLATE } from 'server/getBrowserTitle';

export default ({ children }) => (
  <div>
    <Helmet titleTemplate={TITLE_TEMPLATE} />
    <main role='main'>
      {children}
    </main>
  </div>
);
