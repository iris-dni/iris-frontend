import React from 'react';
import styles from './layout-sidebar.scss';

const LayoutSidebar = ({ children }) => (
  <div className={styles.root} role={'complementary'}>
    <div className={styles.inner}>
      {children}
    </div>
  </div>
);

export default LayoutSidebar;
