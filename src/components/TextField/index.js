import React from 'react';
import domOnlyProps from 'form/domOnlyProps';
import styles from './text-field.scss';

export default ({ config, helper }) => {
  return (
    <div>
      <label htmlFor={config.name} className={styles.label}>{config.label}</label>
      {config.hint &&
        <em className={styles.hint}>{config.hint}</em>
      }
      <div>
        <config.element
          className={styles[config.element]}
          id={config.name}
          // pass props from config e.g. type, placeholder, maxlength
          {...config.html}
          // domOnlyProps required with latest react and redux-form 5.x
          // see: https://github.com/erikras/redux-form/issues/1441#issuecomment-236966387
          {...domOnlyProps(helper)}
        />
        {helper.touched && helper.error &&
          <strong className={styles.error}>{helper.error}</strong>
        }
      </div>
    </div>
  );
};
