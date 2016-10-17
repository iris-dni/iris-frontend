import React from 'react';
import styles from './heading2.scss';
import getClassnames from 'helpers/getClassnames';

const Heading2 = ({ children, text, size }) => (
  <h2 className={getClassnames(styles, ['root', size])}>
    {children || text}
  </h2>
);

export default Heading2;
