import React from 'react';
import settings from 'settings';
import styles from './form-validation.scss';
import fieldIsValid from 'form/fieldIsValid';
import fieldIsInvalid from 'form/fieldIsInvalid';
import FormValidationMessage from 'components/FormValidationMessage';
import FormValidationIcon from 'components/FormValidationIcon';

const FormValidation = ({ helper, config, isTrusted }) => (
  <div>
    <div className={styles.message}>
      {(isTrusted && !helper.dirty) &&
        <FormValidationMessage
          valid
          message={settings.validatedText.replace('%f', config.label)}
        />
      }
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
);

export default FormValidation;
