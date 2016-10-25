import React from 'react';
import settings from 'settings';
import Markdown from 'react-markdown';
import styles from './form-label.scss';

export default ({ fieldId, label, hint, optional }) => (
  <div className={styles.root}>
    <label htmlFor={fieldId} className={styles.label}>
      {label} {optional &&
        <span className={styles['optional-label']}>{settings.optionalLabel}</span>
      }
    </label>
    {hint &&
      <Markdown
        className={styles.hint}
        source={hint}
        allowedTypes={['Text', 'Paragraph', 'Link', 'Emph', 'Strong']}
      />
    }
  </div>
);
