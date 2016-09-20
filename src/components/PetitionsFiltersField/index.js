import React from 'react';
import styles from './petitions-filters-field.scss';

const PetitionsFiltersField = ({ label, name, children }) => (
  <div className={styles.root}>
    <label className={styles.label} htmlFor={name}>
      {label}
    </label>

    <div className={styles['input-wrapper']}>
      {children}
    </div>
  </div>
);

export default PetitionsFiltersField;
