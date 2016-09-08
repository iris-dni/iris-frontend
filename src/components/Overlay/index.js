import React from 'react';
import styles from './overlay.scss';

const DISABLED_SCROLL_MODIFIER = 'disabled-scroll';

const Overlay = React.createClass({
  onEscape ({ keyCode }) {
    if (keyCode === 27 && this.props.active) {
      this.props.onClickHandler();
    }
  },

  componentWillReceiveProps (nextProps) {
    if (nextProps.active) {
      document.documentElement.classList.add(DISABLED_SCROLL_MODIFIER);
    } else {
      document.documentElement.classList.remove(DISABLED_SCROLL_MODIFIER);
    }
  },
  componentDidMount () {
    if (this.props.active) {
      document.documentElement.classList.add(DISABLED_SCROLL_MODIFIER);
    }

    document.addEventListener('keydown', this.onEscape);
  },
  componentWillUnmount () {
    document.documentElement.classList.remove(DISABLED_SCROLL_MODIFIER);
    document.removeEventListener('keydown', this.onEscape);
  },
  componentDidUpdate () {
    if (this.props.active) {
      document.documentElement.classList.add(DISABLED_SCROLL_MODIFIER);
    } else {
      document.documentElement.classList.remove(DISABLED_SCROLL_MODIFIER);
    }
  },

  render () {
    return (
      <div
        tabIndex='-1'
        data-a11y-dialog-hide
        className={this.props.active ? styles.active : styles.overlay}
        onClick={this.props.onClickHandler}
      ></div>
    );
  }
});

export default Overlay;
