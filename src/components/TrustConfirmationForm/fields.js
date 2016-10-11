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
    name: 'mobile_token',
    label: settings.trustConfirmationFields.mobile_token.label,
    hint: settings.trustConfirmationFields.mobile_token.hint,
    html: {
      placeholder: settings.trustConfirmationFields.mobile_token.placeholder,
      maxLength: 6,
      minLength: 6,
      required: true
    }
  }
];
