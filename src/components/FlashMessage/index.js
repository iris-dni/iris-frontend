import React from 'react';
import styles from './flash-message.scss';

export default ({ children, text, type }) => (
  <strong className={styles[type || 'default']}>
    {children || text}
  </strong>
);
