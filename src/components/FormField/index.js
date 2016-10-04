import React from 'react';
import domOnlyProps from 'form/domOnlyProps';
import fieldIsInvalid from 'form/fieldIsInvalid';
import styles from './form-field.scss';
import Autocomplete from 'containers/Autocomplete';
import PetitionLinksField from 'containers/PetitionLinksField';
import FormFieldWrapper from 'components/FormFieldWrapper';

const getClassname = (element, error) => {
  return [
    styles[element || 'input'],
    styles[error ? 'invalid' : 'valid']
  ].join(' ');
};

const FormField = React.createClass({
  render () {
    const { config, helper, openGraph } = this.props;

    let Field;

    switch (config.element) {
      case 'Autocomplete':
        Field = (
          <Autocomplete
            helper={helper}
            {...config}
          />
        );
        break;
      case 'PetitionLinksField':
        Field = (
          <PetitionLinksField
            helper={helper}
            config={config}
            openGraph={openGraph}
          />
        );
        break;
      default:
        Field = (
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

    return Field;
  }
});

export default FormFieldWrapper(FormField);
