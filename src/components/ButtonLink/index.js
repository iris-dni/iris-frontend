import React from 'react';
import styles from '../Button/button.scss';

const ButtonLink = ({ children, text, href, modifier }) => (
  <a href={href || '#'} className={styles[modifier || 'default']}>
    {children || text}
  </a>
);

export default ButtonLink;
