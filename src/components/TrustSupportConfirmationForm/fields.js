import settings from 'settings';

export default [
  {
    element: 'input',
    name: 'mobile_token',
    label: settings.trustConfirmationFields.mobile_token.label,
    hint: settings.trustConfirmationFields.mobile_token.hint,
    html: {
      placeholder: settings.trustConfirmationFields.mobile_token.placeholder,
      maxLength: 5,
      minLength: 5,
      required: true
    }
  }
];
