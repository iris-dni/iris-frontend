import React from 'react';
import styles from './page-content.scss';

const PageContent = ({ children }) => (
  <div className={styles.root}>
    {children}
  </div>
);

export default PageContent;
