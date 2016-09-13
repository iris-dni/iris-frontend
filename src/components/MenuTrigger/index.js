import React from 'react';
import styles from './burger-menu.scss';

const MenuTrigger = React.createClass({
  getClassName (defaultClass) {
    const opened = this.props.opened
      ? styles.opened
      : this.props.wasOpened
      ? styles.closed
      : '';

    return `${defaultClass} ${opened}`;
  },

  render () {
    return (
      <button
        aria-label='Menu'
        aria-controls='navigation'
        className={this.getClassName(styles['menu-trigger-wrapper'])}
        onClick={this.props.onClickHandler}
      >
        <span>Menu</span>

        <div
          aria-role='presentational'
          className={styles['burger-icon']}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    );
  }

});

export default MenuTrigger;
