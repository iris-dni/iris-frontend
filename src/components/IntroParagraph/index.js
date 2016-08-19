import React from 'react';
import styles from './intro-paragraph.scss';

const IntroParagraph = ({ children, text }) => (
  <p className={styles.root}>
    {children || text}
  </p>
);

export default IntroParagraph;
