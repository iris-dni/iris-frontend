import 'assets/styles/base.scss';
import React from 'react';
import Helmet from 'react-helmet';
import settings from 'settings';
import SiteHeader from 'components/SiteHeader';
import SiteFooter from 'components/SiteFooter';
import FlashMessage from 'containers/FlashMessage';
import ModalWindow from 'containers/ModalWindow';

const TITLE_TEMPLATE = `%s | ${settings.title}`;

export default ({ children, flashMessage, modalWindow }) => (
  <div className={'wrapper'}>
    <Helmet titleTemplate={TITLE_TEMPLATE} />
    {flashMessage && flashMessage.text &&
      <FlashMessage {...flashMessage} />
    }
    <SiteHeader />

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
