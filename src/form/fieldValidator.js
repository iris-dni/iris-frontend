import settings from 'settings';

export default (fields, values) => {
  const errors = {};

  fields.map(field => {
    const key = field.name;
    const isRequired = field.html && field.html.required;
    const minLength = field.html && field.html.minLength;
    const maxLength = field.html && field.html.maxLength;

    if (isRequired && !values[key]) {
      // test for required fields
      errors[key] = settings.requiredText;
    } else if (minLength && values[key] && values[key].length > maxLength) {
      // test against maxLength
      errors[key] = settings.maxLengthText.replace('%x', maxLength);
    } else if (minLength && values[key] && values[key].length < minLength) {
      // test against minLength
      errors[key] = settings.minLengthText.replace('%x', minLength);
    }
  });

  return errors;
};
