import React from 'react';
import styles from './fieldset.scss';

const Fieldset = ({ children }) => (
  <fieldset className={styles.root}>
    {children}
  </fieldset>
);

export default Fieldset;
