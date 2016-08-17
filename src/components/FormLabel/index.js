import React from 'react';
import styles from './form-label.scss';

export default ({ fieldId, label, hint }) => (
  <div className={styles.root}>
    <label htmlFor={fieldId} className={styles.label}>{label}</label>
    {hint &&
      <em className={styles.hint}>{hint}</em>
    }
  </div>
);
