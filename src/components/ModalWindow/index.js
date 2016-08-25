import React from 'react';
import styles from './modal-window.scss';

const Modal = ({ active, children, hideModalWindow }) => {
  return (
    <div aria-hidden={!active} className={styles.root}>
      <div tabIndex='-1' data-a11y-dialog-hide className={styles.overlay}></div>
      <div role='dialog' aria-labelledby='dialog-title' className={styles.content}>
        <div role='document'>
          {children}
          <button type='button'
            className={styles.close}
            onClick={() => hideModalWindow()}
            data-a11y-dialog-hide aria-label='Close this dialog window'>
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
