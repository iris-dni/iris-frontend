import settings from 'settings';

export default (values) => {
  const errors = {};

  // Validate `title` field
  if (!values.title) {
    errors.title = settings.requiredText;
  } else if (values.title.length < 15) {
    errors.title = settings.minLengthText.replace('%x', '15');
  } else if (values.title.length > 80) {
    errors.title = settings.maxLengthText.replace('%x', '80');
  }

  // Validate `description` field
  if (!values.description) {
    errors.description = settings.requiredText;
  } else if (values.description.length < 50) {
    errors.description = settings.minLengthText.replace('%x', '50');
  }

  // Validate `suggested_solution` field
  if (!values.suggested_solution) {
    errors.suggested_solution = settings.requiredText;
  } else if (values.suggested_solution.length < 50) {
    errors.suggested_solution = settings.minLengthText.replace('%x', '50');
  }

  return errors;
};
