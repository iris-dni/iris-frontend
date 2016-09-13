import React from 'react';
import styles from './modal-window.scss';
import settings from 'settings';
import Overlay from 'components/Overlay';
import CloseButton from 'components/CloseButton';

const Modal = ({ active, children, hideModalWindow }) => (
  <div aria-hidden={!active} className={styles.root}>
    <Overlay active={active} onClickHandler={hideModalWindow} />
    <div role='dialog' aria-labelledby='dialog-title' className={styles.content}>
      <div role='document'>
        {children}
      </div>
      <div className={styles.close}>
        <CloseButton
          onClick={hideModalWindow}
          text={settings.modalWindow.closeButton}
          attrs={{
            'data-a11y-dialog-hide': true,
            'aria-label': settings.modalWindow.closeButton
          }}
        />
      </div>
    </div>
  </div>
);

export default Modal;
