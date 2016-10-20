import React from 'react';
import styles from './section.scss';

const Section = ({ children, theme }) => (
  <div className={styles[theme || 'default']}>
    {children}
  </div>
);

export default Section;
