import settings from 'settings';
import { get, set } from 'lodash/object';

export default (fields, values) => {
  const errors = {};

  fields && fields.map(field => {
    if (!field) {
      return;
    }

    const key = field.name;
    const value = get(values, key);
    const isRequired = field.html && field.html.required;
    const minLength = field.html && field.html.minLength;
    const maxLength = field.html && field.html.maxLength;
    const fieldType = field.html && field.html.type;
    const emailValidation = new RegExp(settings.emailRegex);
    const phoneValidation = new RegExp(settings.telephoneRegex);

    if (isRequired && values && !value) {
      // test for required fields
      set(errors, key, settings.requiredText);
    } else if (fieldType === 'email' && value && !emailValidation.test(value)) {
      // test email format
      set(errors, key, settings.emailInvalidText);
    } else if (fieldType === 'tel' && value && !phoneValidation.test(value)) {
      // test telephone format
      set(errors, key, settings.phoneInvalidText);
    } else if (maxLength && value && value.length > maxLength) {
      // test against maxLength
      set(errors, key, settings.maxLengthText.replace('%x', maxLength));
    } else if (minLength && value && value.length < minLength) {
      // test against minLength
      set(errors, key, settings.minLengthText.replace('%x', minLength));
    }
  });

  return errors;
};
