import React from 'react';
import styles from './paragraph.scss';

const Paragraph = ({ children, text }) => (
  <p className={styles.root}>
    {children || text}
  </p>
);

export default Paragraph;
