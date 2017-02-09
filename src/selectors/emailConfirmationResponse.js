import settings from 'settings';

export default ({ displayError, invalidKey, emailAlreadyConfirmed }) => {
  if (displayError || invalidKey) {
    return {displayError: true};
  }
  if (emailAlreadyConfirmed) {
    return {translation: settings.emailConfirmationPage.emailAlreadyConfirmed};
  }
  return {translation: settings.emailConfirmationPage.default};
};
