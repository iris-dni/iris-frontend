import React from 'react';
import styles from './burger-menu.scss';

const BurgerMenu = React.createClass({
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
      <div
        className={this.getClassName(styles['burger-wrapper'])}
        onClick={this.props.onClickHandler}
      >
        <span>Menu</span>

        <div className={styles['burger-menu']}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }

});

export default BurgerMenu;
