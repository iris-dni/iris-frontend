import 'assets/styles/base.scss';
import React from 'react';
import Helmet from 'react-helmet';
import FlashMessage from 'components/FlashMessage';
import { TITLE_TEMPLATE } from 'server/getBrowserTitle';

export default ({ children, flashMessage }) => (
  <div>
    <Helmet titleTemplate={TITLE_TEMPLATE} />
    {flashMessage &&
      <FlashMessage {...flashMessage} />
    }
    <main role='main'>
      {children}
    </main>
  </div>
);
