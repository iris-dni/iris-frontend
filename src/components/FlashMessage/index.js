import React from 'react';
import styles from './flash-message.scss';

const TIMEOUT = 2000;

const FlashMessage = React.createClass({

  beginTimeout () {
    const duration = this.props.duration || TIMEOUT;
    return setTimeout(() => this.props.hideFlashMessage(), duration);
  },

  componentDidMount () {
    this.timeoutId = this.beginTimeout();
  },

  componentWillReceiveProps (nextProps) {
    if (nextProps.text && this.props.text !== nextProps.text) {
      clearTimeout(this.timeoutId);
      this.timeoutId = this.beginTimeout();
    }
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
