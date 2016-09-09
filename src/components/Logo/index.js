import React from 'react';
import settings from 'settings';
import styles from './logo.scss';

const Logo = () => (
  <span className={styles.logo}>{settings.logo}</span>
);

export default Logo;
