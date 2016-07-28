import React from 'react';
import styles from './button-link.scss';

const ButtonLink = ({ children, text, href }) => (
  <a href={href || '#'} className={styles.root}>
    {children || text}
  </a>
);

export default ButtonLink;
