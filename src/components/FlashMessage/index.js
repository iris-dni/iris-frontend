import React from 'react';
import styles from './flash-message.scss';

const TIMEOUT = 2000;

const FlashMessage = React.createClass({
  hideEvent: () => {},

  beginTimeout () {
    const duration = this.props.duration || TIMEOUT;
    setTimeout(() => this.props.hideFlashMessage(), duration);
  },

  componentDidMount () {
    this.hideEvent = this.beginTimeout();
    this.hideEvent;
  },

  componentDidUpdate () {
    clearTimeout(this.hideEvent);
    this.hideEvent = this.beginTimeout();
    this.hideEvent;
  },

  render () {
    return (
      <strong className={styles[this.props.modifier || 'default']} role='alert'>
        {this.props.children || this.props.text}
      </strong>
    );
  }
});

export default FlashMessage;
