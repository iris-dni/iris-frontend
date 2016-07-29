import React from 'react';
import styles from './layout-sidebar.scss';

const LayoutSidebar = ({ children }) => (
  <div className={styles.root} role={'complementary'}>
    {children}
  </div>
);

export default LayoutSidebar;
