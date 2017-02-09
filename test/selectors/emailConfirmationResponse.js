import { assert } from 'chai';
import getEmailConfirmationResponse from 'selectors/emailConfirmationResponse';

describe('emailConfirmationResponse selector', () => {
  context('with `displayError`', () => {
    const actual = getEmailConfirmationResponse({
      displayError: true
    });
    const expected = {displayError: true};

    it('returns object indicating to display an error', () => assert.deepEqual(actual, expected));
  });

  context('with `invalidKey`', () => {
    const actual = getEmailConfirmationResponse({
      invalidKey: true
    });
    const expected = {displayError: true};

    it('returns object indicating to display an error', () => assert.deepEqual(actual, expected));
  });

  context('with `emailAlreadyConfirmed = false`', () => {
    const actual = getEmailConfirmationResponse({
      emailAlreadyConfirmed: false
    });
    const expected = {
      translation: {
        title: 'Email address confirmed',
        hint: 'Thank you for confirming your email address. You will now receive important petition updates via email.',
        link: 'Browse petitions'
      }
    };

    it('returns with correct translation', () => assert.deepEqual(actual, expected));
  });

  context('with `emailAlreadyConfirmed = true`', () => {
    const actual = getEmailConfirmationResponse({
      emailAlreadyConfirmed: true
    });
    const expected = {
      translation: {
        title: 'Email address already confirmed',
        hint: 'Your email address has already been confirmed.',
        link: 'Browse petitions'
      }
    };

    it('returns with correct translation', () => assert.deepEqual(actual, expected));
  });
});
