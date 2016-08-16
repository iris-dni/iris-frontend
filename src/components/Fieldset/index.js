import React from 'react';
import styles from './fieldset.scss';

const Fieldset = ({ modifier, children }) => (
  <fieldset className={styles[modifier || 'root']}>
    {children}
  </fieldset>
);

export default Fieldset;
