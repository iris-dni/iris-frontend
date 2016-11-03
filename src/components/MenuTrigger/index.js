import React from 'react';
import styles from './burger-menu.scss';

const getClassname = (isOpened, wasOpened) => {
  const opened = isOpened
    ? styles.opened
    : wasOpened
    ? styles.closed
    : '';

  return [
    styles['menu-trigger-wrapper'],
    opened
  ].join(' ');
};

const MenuTrigger = ({ opened, wasOpened, onClickHandler }) => (
  <button
    aria-label={opened ? 'Close navigation menu' : 'Open navigation menu'}
    aria-controls='navigation'
    className={getClassname(opened, wasOpened)}
    onClick={onClickHandler}
  >
    Menu

    <div aria-role='presentational' className={styles['burger-icon']}>
      <span />
      <span />
      <span />
    </div>
  </button>
);

export default MenuTrigger;
