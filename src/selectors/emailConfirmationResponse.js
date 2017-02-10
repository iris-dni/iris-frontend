import settings from 'settings';

export default ({ displayError, invalidKey, emailAlreadyConfirmed }) => {
  if (displayError || invalidKey) {
    return {displayError: true};
  }
  const translation = emailAlreadyConfirmed ? 'emailAlreadyConfirmed' : 'default';
  return {
    ...settings.emailConfirmationPage[translation],
    displayError: false
  };
};
