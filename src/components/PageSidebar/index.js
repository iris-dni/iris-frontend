import React from 'react';
import styles from './page-sidebar.scss';

const PageSidebar = ({ children }) => (
  <div className={styles.root} role={'complementary'}>
    {children}
  </div>
);

export default PageSidebar;
