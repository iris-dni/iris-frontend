import React from 'react';
import domOnlyProps from 'form/domOnlyProps';
import fieldIsValid from 'form/fieldIsValid';
import fieldIsInvalid from 'form/fieldIsInvalid';
import FormLabel from 'components/FormLabel';
import FormValidationMessage from 'components/FormValidationMessage';
import FormValidationIcon from 'components/FormValidationIcon';
import styles from './text-field.scss';

const getClassname = (element, error) => {
  return [
    styles[element || 'input'],
    styles[error ? 'invalid' : 'valid']
  ].join(' ');
};

export default ({ config, helper }) => (
  <div className={styles.root}>
    <FormLabel
      fieldId={config.name}
      label={config.label}
      hint={config.hint}
    />
    <div className={styles.wrapper}>
      <config.element
        className={getClassname(config.element, fieldIsInvalid(helper))}
        id={config.name}
        // pass props from config e.g. type, placeholder, maxlength
        {...config.html}
        // domOnlyProps required with latest react and redux-form 5.x
        // see: https://github.com/erikras/redux-form/issues/1441#issuecomment-236966387
        {...domOnlyProps(helper)}
      />

      <div className={styles.message}>
        <FormValidationMessage
          error={fieldIsInvalid(helper)}
          valid={fieldIsValid(helper)}
          message={helper.error || config.validated}
        />
      </div>
      <div className={styles.icon}>
        <FormValidationIcon
          error={fieldIsInvalid(helper)}
          valid={fieldIsValid(helper)}
        />
      </div>
    </div>
  </div>
);
