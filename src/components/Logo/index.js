import React from 'react';
import settings from 'settings';
import styles from './logo.scss';

const Logo = () => (
  <span className={styles.logo}>
    {settings.logoPath
      ? <img src={settings.logoPath} alt={settings.logo} className={styles.image} />
      : <span className={styles.text}>{settings.logo}</span>
    }
  </span>
);

export default Logo;
