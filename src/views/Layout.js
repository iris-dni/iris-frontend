import 'assets/styles/base.scss';
import React from 'react';
import Helmet from 'react-helmet';
import SiteFooter from 'components/SiteFooter';
import FlashMessage from 'containers/FlashMessage';
import ModalWindow from 'containers/ModalWindow';
import { TITLE_TEMPLATE } from 'server/getBrowserTitle';

export default ({ children, flashMessage, modalWindow }) => (
  <div className={'wrapper'}>
    <Helmet titleTemplate={TITLE_TEMPLATE} />
    {flashMessage && flashMessage.text &&
      <FlashMessage {...flashMessage} />
    }
    <main
      className={'main-content'}
      role='main'
      aria-label='Content'
      aria-hidden={(modalWindow && modalWindow.active) || false}>
      {children}
    </main>
    {modalWindow && modalWindow.active &&
      <ModalWindow {...modalWindow} />
    }
    <SiteFooter />
  </div>
);
