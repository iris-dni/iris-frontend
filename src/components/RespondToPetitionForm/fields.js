import settings from 'settings';

export default [
  {
    element: 'input',
    name: 'petitionId',
    hidden: true,
    html: {
      type: 'hidden'
    }
  },
  {
    element: 'input',
    name: 'token',
    hidden: true,
    html: {
      type: 'hidden'
    }
  },
  {
    element: 'textarea',
    name: 'answer.text',
    label: settings.respondToPetitionFields.response.label,
    hint: settings.respondToPetitionFields.response.hint,
    html: {
      placeholder: settings.respondToPetitionFields.response.placeholder,
      required: true,
      minLength: 50,
      maxLength: 10000
    }
  },
  {
    element: 'input',
    name: 'answer.name',
    label: settings.respondToPetitionFields.name.label,
    hint: settings.respondToPetitionFields.name.hint,
    html: {
      type: 'text',
      placeholder: settings.respondToPetitionFields.name.placeholder,
      required: true,
      minLength: 15,
      maxLength: 80
    }
  }
];
