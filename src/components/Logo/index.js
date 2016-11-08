import React from 'react';
import { setting } from 'settings';
import styles from './logo.scss';

const Logo = () => (
  <span className={styles.logo}>{setting('logo')}</span>
);

export default Logo;
