import 'assets/styles/base.scss';
import React from 'react';
import Helmet from 'react-helmet';
import settings from 'settings';
import SiteHeader from 'components/SiteHeader';
import SiteFooter from 'components/SiteFooter';
import FlashMessage from 'containers/FlashMessage';
import ModalWindow from 'containers/ModalWindow';
import { get } from 'lodash/object';

const TITLE_TEMPLATE = `%s | ${settings.title}`;

const getDisplayName = component => get(component, 'type.WrappedComponent.displayName', '');

export default ({ children, flashMessage, modalWindow }) => (
  <div className={'wrapper'}>
    <Helmet titleTemplate={TITLE_TEMPLATE} />
    <FlashMessage {...flashMessage} />
    <SiteHeader />
    <main
      className={'main-content'}
      role='main'
      aria-label='Content'
      aria-hidden={(modalWindow && modalWindow.active) || false}>
      {children}
    </main>
    <SiteFooter section={getDisplayName(children)} />
    <ModalWindow {...modalWindow} />
  </div>
);
