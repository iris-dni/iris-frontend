import settings from 'settings';
import { get } from 'lodash/object';

export default (fields, values) => {
  const errors = {};

  fields && fields.map(field => {
    if (!field) {
      return;
    }

    const key = field.name;
    const value = get(values, field.name);
    const isRequired = field.html && field.html.required;
    const minLength = field.html && field.html.minLength;
    const maxLength = field.html && field.html.maxLength;

    if (isRequired && values && !value) {
      // test for required fields
      errors[key] = settings.requiredText;
    } else if (maxLength && value && value.length > maxLength) {
      // test against maxLength
      errors[key] = settings.maxLengthText.replace('%x', maxLength);
    } else if (minLength && value && value.length < minLength) {
      // test against minLength
      errors[key] = settings.minLengthText.replace('%x', minLength);
    }
  });

  return errors;
};
