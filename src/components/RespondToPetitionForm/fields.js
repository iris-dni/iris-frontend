import { translation } from 'translations';

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
    label: translation('respondToPetitionFields.response.label'),
    hint: translation('respondToPetitionFields.response.hint'),
    html: {
      placeholder: translation('respondToPetitionFields.response.placeholder'),
      required: true,
      minLength: 50,
      maxLength: 500
    }
  },
  {
    element: 'input',
    name: 'answer.name',
    label: translation('respondToPetitionFields.name.label'),
    hint: translation('respondToPetitionFields.name.hint'),
    html: {
      type: 'text',
      placeholder: translation('respondToPetitionFields.name.placeholder'),
      required: true,
      minLength: 15,
      maxLength: 80
    }
  }
];
