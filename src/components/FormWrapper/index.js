import React from 'react';
import styles from './form-wrapper.scss';

const FormWrapper = ({ children }) => (
  <div className={styles.root}>
    {children}
  </div>
);

export default FormWrapper;
