import React from 'react';
import styles from './flash-message.scss';

const TIMEOUT = 2000;

const FlashMessage = React.createClass({
  hideEvent: () => {},

  beginTimeout () {
    setTimeout(() => this.props.hideFlashMessage(), TIMEOUT);
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
      <strong className={styles[this.props.modifier || 'default']}>
        {this.props.children || this.props.text}
      </strong>
    );
  }
});

export default FlashMessage;
