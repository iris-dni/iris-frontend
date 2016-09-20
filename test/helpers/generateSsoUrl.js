import { assert } from 'chai';
import generateSsoUrl from 'helpers/generateSsoUrl';

describe('generateSsoUrl', () => {
  context('for an ssoUrl without params', () => {
    const ssoUrl = 'https://example.com';
    const returnUrl = '/return-path';

    it('returns the right SSO url with an irisreturl param', () => {
      const actual = generateSsoUrl(ssoUrl, returnUrl);
      const expected = 'https://example.com?irisreturl=http%3A%2F%2Flocalhost%3A8000%2Freturn-path';

      assert.equal(actual, expected);
    });
  });

  context('for an ssoUrl with existing params', () => {
    const ssoUrl = 'https://example.com?q=abc';
    const returnUrl = '/return-path';

    it('returns the right SSO url with the appended irisreturl param', () => {
      const actual = generateSsoUrl(ssoUrl, returnUrl);
      const expected = 'https://example.com?q=abc&irisreturl=http%3A%2F%2Flocalhost%3A8000%2Freturn-path';

      assert.equal(actual, expected);
    });
  });
});
