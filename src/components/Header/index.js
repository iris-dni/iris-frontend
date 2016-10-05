import React from 'react';
import styles from './header.scss';

const Header = ({ children, padding }) => (
  <header className={padding ? styles.padding : styles.root}>
    {children}
  </header>
);

export default Header;
