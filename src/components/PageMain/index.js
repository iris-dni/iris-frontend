import React from 'react';
import styles from './page-main.scss';

const PageContent = ({ children }) => (
  <main className={styles.root} role={'main'}>
    {children}
  </main>
);

export default PageContent;
