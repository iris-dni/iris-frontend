import settings from 'settings';

export default [
  {
    element: 'input',
    name: 'id',
    hidden: true,
    html: {
      type: 'hidden'
    }
  },
  {
    element: 'textarea',
    name: 'response',
    label: settings.respondToPetitionFields.label,
    hint: settings.respondToPetitionFields.hint,
    html: {
      placeholder: settings.respondToPetitionFields.placeholder,
      required: true,
      minLength: 50,
      maxLength: 500
    }
  }
];
