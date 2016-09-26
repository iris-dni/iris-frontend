import React from 'react';
import styles from './paragraph.scss';

const Paragraph = ({ children, text, noMargin }) => (
  <p className={styles[noMargin ? 'no-margin' : 'root']}>
    {children || text}
  </p>
);

export default Paragraph;
