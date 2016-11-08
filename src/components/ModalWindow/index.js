import React from 'react';
import styles from './modal-window.scss';
import { translation } from 'translations';
import Overlay from 'components/Overlay';
import CloseButton from 'components/CloseButton';

const Modal = ({ active, title, children, hideModalWindow }) => (
  <div aria-hidden={!active} className={styles.root}>
    <Overlay active={active} onClickHandler={hideModalWindow} />
    <div role='dialog' aria-labelledby='dialog-title' className={styles.content}>
      <div role='document'>
        {children}
      </div>
      <div className={styles.close}>
        <CloseButton
          onClick={hideModalWindow}
          text={translation('modalWindow.closeButton')}
          attrs={{
            'aria-label': translation('modalWindow.closeButton')
          }}
        />
      </div>
    </div>
  </div>
);

export default Modal;
