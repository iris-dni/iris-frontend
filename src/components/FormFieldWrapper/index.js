import React from 'react';
import fieldIsValid from 'form/fieldIsValid';
import fieldIsInvalid from 'form/fieldIsInvalid';
import FormLabel from 'components/FormLabel';
import FormValidationMessage from 'components/FormValidationMessage';
import FormValidationIcon from 'components/FormValidationIcon';
import styles from './form-field-wrapper.scss';

const getRootClassname = (config) => {
  return [
    styles[config.hidden ? 'hidden' : 'root'],
    styles[`${config.element.toLowerCase()}-wrapper`]
  ].join(' ');
};

const getFieldClassname = (config) => {
  return [
    styles.field,
    styles[`${config.element.toLowerCase()}-field`]
  ].join(' ');
};

const FormFieldWrapper = (WrappedComponent) => ({ config, helper }) => (
  <div
    className={getRootClassname(config)}
    aria-hidden={config.hidden}>
    {!config.hidden &&
      <FormLabel
        fieldId={config.name}
        label={config.label}
        hint={config.hint}
      />
    }

    <div className={getFieldClassname(config)}>
      <WrappedComponent config={config} helper={helper} />

      {!config.hidden &&
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
      }
    </div>
  </div>
);

export default FormFieldWrapper;
