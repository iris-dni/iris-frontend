import { assert } from 'chai';
import envVars from '../support/envVars';
import { escape } from 'querystring';
import generateSsoProviders from 'helpers/generateSsoProviders';

describe('generateSsoProviders', () => {
  const returnPath = '/return-url';
  const escapedReturnUrl = escape([envVars.baseUrl, returnPath].join(''));

  context('without providers from settings but with an ENV provider', () => {
    it('returns only the ENV provider', () => {
      const actual = generateSsoProviders([], returnPath);
      const expected = [
        {
          text: envVars.ssoProviderText,
          url: `${envVars.ssoProviderUrl}?irisreturl=${escapedReturnUrl}`
        }
      ];

      assert.deepEqual(actual, expected);
    });
  });

  context('with providers from settings and an ENV provider', () => {
    it('returns all the providers', () => {
      const providers = [
        {
          text: 'Sign in with A',
          url: 'https://a.example.com'
        },
        {
          text: 'Sign in with B',
          url: 'https://b.example.com'
        }
      ];

      const actual = generateSsoProviders(providers, returnPath);
      const expected = [
        {
          text: 'Sign in with A',
          url: `https://a.example.com?irisreturl=${escapedReturnUrl}`
        },
        {
          text: 'Sign in with B',
          url: `https://b.example.com?irisreturl=${escapedReturnUrl}`
        },
        {
          text: envVars.ssoProviderText,
          url: `${envVars.ssoProviderUrl}?irisreturl=${escapedReturnUrl}`
        }
      ];

      assert.deepEqual(actual, expected);
    });
  });

  it('does not return providers with missing text or url', () => {
    const providers = [
      {
        text: 'Sign in with A',
        url: 'https://a.example.com'
      },
      {
        url: 'https://b.example.com'
      },
      {
        text: 'Sign in with C'
      }
    ];

    const actual = generateSsoProviders(providers, returnPath);
    const expected = [
      {
        text: 'Sign in with A',
        url: `https://a.example.com?irisreturl=${escapedReturnUrl}`
      },
      {
        text: envVars.ssoProviderText,
        url: `${envVars.ssoProviderUrl}?irisreturl=${escapedReturnUrl}`
      }
    ];

    assert.deepEqual(actual, expected);
  });
});
