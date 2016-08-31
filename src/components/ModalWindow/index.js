import React from 'react';
import styles from './modal-window.scss';
import CloseButton from 'components/CloseButton';

const Modal = React.createClass({
  onEscape ({ keyCode }) {
    if (keyCode === 27 && typeof this.props.hideModalWindow === 'function') {
      this.props.hideModalWindow();
    }
  },

  componentDidMount () {
    document.addEventListener('keydown', this.onEscape);
  },

  componentWillUnmount () {
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
        </div>
        <div className={styles.close}>
          <CloseButton
            onClick={hideModalWindow}
            attrs={{
              'data-a11y-dialog-hide': true,
              'aria-label': 'Close this dialog window'
            }}
          />
        </div>
      </div>
    );
  }
});

export default Modal;
