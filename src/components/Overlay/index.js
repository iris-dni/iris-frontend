import React from 'react';
import styles from './overlay.scss';

const Overlay = ({ active }) => (
  <div
    tabIndex='-1'
    data-a11y-dialog-hide
    className={active ? styles.active : styles.overlay}
  ></div>
);

export default Overlay;
