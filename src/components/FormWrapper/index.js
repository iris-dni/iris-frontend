import React from 'react';
import styles from './form-wrapper.scss';

const FormWrapper = ({ header, children }) => (
  <div className={header ? styles.first : styles.root}>
    {children}
  </div>
);

export default FormWrapper;
