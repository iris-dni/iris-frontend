import React from 'react';
import styles from '../Button/button.scss';

const ButtonLink = ({ children, text, href, modifier, onClick }) => (
  <a
    href={href || '#'}
    onClick={onClick ? (e) => { e.preventDefault(); onClick(); } : () => {}}
    className={styles[modifier || 'default']}>
    {children || text}
  </a>
);

export default ButtonLink;
