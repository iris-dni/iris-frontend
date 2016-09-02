import React from 'react';
import styles from './link.scss';

const Link = ({ href, children, text }) => (
  <a href={href} className={styles.root}>
    {children || text}
  </a>
);

export default Link;
