import React from 'react';
import styles from './form-message.scss';

export default ({ children, text, modifier }) => (
  <strong className={styles[modifier || 'default']}>
    {children || text}
  </strong>
);
