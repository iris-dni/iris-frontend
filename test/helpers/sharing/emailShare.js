import chai from 'chai';
import settings from 'settings';
import emailShare from 'helpers/sharing/emailShare';

const { assert } = chai;

describe('emailShare', () => {
  it('returns correct brand value', () => {
    const result = emailShare({});
    const actual = result.brand;
    const expected = 'email';

    assert.equal(actual, expected);
  });

  it('returns correct icon value', () => {
    const result = emailShare({});
    const actual = result.icon;
    const expected = 'Email';

    assert.equal(actual, expected);
  });

  it('returns label form settings', () => {
    const result = emailShare({});
    const actual = result.label;
    const expected = settings.shareButtons.email.label;

    assert.equal(actual, expected);
  });

  it('returns encoded href', () => {
    const result = emailShare({
      subject: 'Test email',
      body: 'Check this link',
      url: 'http://foobar.co.uk'
    });
    const actual = result.href;
    const expected = 'mailto:?subject=Test%20email&body=Check%20this%20link%20%0D%0A%0D%0A%20http://foobar.co.uk';

    assert.equal(actual, expected);
  });
});
