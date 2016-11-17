import React from 'react';
import FormLabel from 'components/FormLabel';
import FormValidation from 'components/FormValidation';
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

const FormFieldWrapper = (WrappedComponent) => ({ config, helper, isTrusted }) => (
  <div
    className={getRootClassname(config)}
    aria-hidden={config.hidden}>
    {!config.hidden &&
      <FormLabel
        fieldId={config.name}
        label={config.label}
        hint={config.hint}
        optional={!config.html.required}
      />
    }
    <div className={getFieldClassname(config)}>
      <WrappedComponent
        config={config}
        helper={helper}
      />
      {(!config.hidden && !config.nestedValidation) &&
        <FormValidation
          isTrusted={isTrusted}
          config={config}
          helper={helper}
        />
      }
    </div>
  </div>
);

export default FormFieldWrapper;
