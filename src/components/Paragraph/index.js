import React from 'react';
import styles from './paragraph.scss';
import getClassNames from 'helpers/getClassNames';

const Paragraph = ({ children, text, margin, size }) => (
  <p className={getClassNames(styles, ['root', margin, size])}>
    {children || text}
  </p>
);

export default Paragraph;
