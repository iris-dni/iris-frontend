import 'assets/styles/base.scss';
import React from 'react';
import Helmet from 'react-helmet';
import FlashMessage from 'containers/FlashMessage';
import ModalWindow from 'containers/ModalWindow';
import { TITLE_TEMPLATE } from 'server/getBrowserTitle';

export default React.createClass({
  render () {
    const { children, flashMessage, modalWindow } = this.props;
    return (
      <div className={'wrapper'}>
        <Helmet titleTemplate={TITLE_TEMPLATE} />
        {flashMessage && flashMessage.text &&
          <FlashMessage {...flashMessage} />
        }
        <main role='main'
          aria-label='Content'
          aria-hidden={(modalWindow && modalWindow.active) || false}>
          {children}
        </main>
        {modalWindow && modalWindow.active &&
          <ModalWindow {...modalWindow} />
        }
      </div>
    );
  }
});
