import React from 'react';
import styles from './form-validation.scss';
import fieldIsValid from 'form/fieldIsValid';
import fieldIsInvalid from 'form/fieldIsInvalid';
import FormValidationMessage from 'components/FormValidationMessage';
import FormValidationIcon from 'components/FormValidationIcon';

const FormValidation = ({ helper, config }) => (
  <div>
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
);

export default FormValidation;
