import React from 'react';
import domOnlyProps from 'form/domOnlyProps';
import fieldIsValid from 'form/fieldIsValid';
import fieldIsInvalid from 'form/fieldIsInvalid';
import FormLabel from 'components/FormLabel';
import FormValidationMessage from 'components/FormValidationMessage';
import FormValidationIcon from 'components/FormValidationIcon';
import styles from './form-field-wrapper.scss';
import Autocomplete from 'containers/Autocomplete';

const getClassname = (element, error) => {
  return [
    styles[element || 'input'],
    styles[error ? 'invalid' : 'valid']
  ].join(' ');
};

const getChildren = (config, helper) => {
  switch (config.element) {
    case 'Autocomplete':
      return (
        <div className={styles['autocomplete-wrapper']}>
          <Autocomplete
            helper={helper}
            {...config}
          />
        </div>
      );

    default:
      return (
        <config.element
          className={getClassname(config.element, fieldIsInvalid(helper))}
          id={config.name}
          // pass props from config e.g. type, placeholder, maxlength
          {...config.html}
          // domOnlyProps required with latest react and redux-form 5.x
          // see: https://github.com/erikras/redux-form/issues/1441#issuecomment-236966387
          {...domOnlyProps(helper)}
        />
      );
  }
};

export default ({ config, helper }) => (
  <div className={config.hidden ? styles.hidden : styles.root}>
    {!config.hidden &&
      <FormLabel
        fieldId={config.name}
        label={config.label}
        hint={config.hint}
      />
    }

    <div className={styles.wrapper}>
      {getChildren(config, helper)}

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
