import React from 'react';
import styles from './modal-window.scss';
import settings from 'settings';
import CloseButton from 'components/CloseButton';

const Modal = React.createClass({
  onEscape ({ keyCode }) {
    if (keyCode === 27 && typeof this.props.hideModalWindow === 'function') {
      this.props.hideModalWindow();
    }
  },

  componentDidMount () {
    if (this.props.active) {
      document.documentElement.classList.add('modal-active');
    }
    document.addEventListener('keydown', this.onEscape);
  },

  componentWillReceiveProps (nextProps) {
    if (nextProps.active) {
      document.documentElement.classList.add('modal-active');
    } else {
      document.documentElement.classList.remove('modal-active');
    }
  },

  componentWillUnmount () {
    document.documentElement.classList.remove('modal-active');
    document.removeEventListener('keydown', this.onEscape);
  },

  render () {
    const { active, children, hideModalWindow } = this.props;
    return (
      <div aria-hidden={!active} className={styles.root}>
        <div tabIndex='-1' data-a11y-dialog-hide className={styles.overlay}></div>
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
  }
});

export default Modal;
