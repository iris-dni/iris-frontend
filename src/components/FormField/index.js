import React from 'react';
import domOnlyProps from 'form/domOnlyProps';
import fieldIsInvalid from 'form/fieldIsInvalid';
import getFieldClassname from 'form/getFieldClassname';
import styles from './form-field.scss';
import Autocomplete from 'containers/Autocomplete';
import PetitionLinksField from 'containers/PetitionLinksField';
import ImageField from 'containers/ImageField';
import FormFieldWrapper from 'components/FormFieldWrapper';
import SelectField from 'components/SelectField';

const FormField = React.createClass({
  render () {
    const { config, helper } = this.props;

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
      case 'SelectField':
        Field = (
          <SelectField
            helper={helper}
            {...config}
          />
        );
        break;
      case 'PetitionLinksField':
        Field = (
          <PetitionLinksField
            // for re-validation function, we only use
            // this field in the petition form right now
            // TODO: make variable
            formId={'petition'}
            helper={helper}
            config={config}
          />
        );
        break;
      case 'ImageField':
        Field = (
          <ImageField
            // for re-validation function, we only use
            // this field in the petition form right now
            // TODO: make variable
            formId={'petition'}
            helper={helper}
            config={config}
          />
        );
        break;
      default:
        Field = (
          <config.element
            className={getFieldClassname(styles, config.element, fieldIsInvalid(helper))}
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
