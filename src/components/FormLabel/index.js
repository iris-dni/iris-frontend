import React from 'react';
import settings from 'settings';
import styles from './form-label.scss';

export default ({ fieldId, label, hint, optional }) => (
  <div className={styles.root}>
    <label htmlFor={fieldId} className={styles.label}>
      {label} {optional &&
        <span className={styles.optionalLabel}>{settings.optionalLabel}</span>
      }
    </label>
    {hint &&
      <em className={styles.hint}>{hint}</em>
    }
  </div>
);
