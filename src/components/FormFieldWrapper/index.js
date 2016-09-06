import React from 'react';
import fieldIsValid from 'form/fieldIsValid';
import fieldIsInvalid from 'form/fieldIsInvalid';
import FormLabel from 'components/FormLabel';
import FormValidationMessage from 'components/FormValidationMessage';
import FormValidationIcon from 'components/FormValidationIcon';
import styles from './form-field-wrapper.scss';

const getClassname = (element) => {
  return [
    styles.field,
    styles[(element || '').toLowerCase()]
  ].join(' ');
};

const FormFieldWrapper = (WrappedComponent) => ({ config, helper }) => (
  <div
    className={config.hidden ? styles.hidden : styles.root}
    aria-hidden={config.hidden}>
    {!config.hidden &&
      <FormLabel
        fieldId={config.name}
        label={config.label}
        hint={config.hint}
      />
    }

    <div className={getClassname(config.element)}>
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
