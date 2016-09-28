import chai from 'chai';
import settings from 'settings';
import facebookShare from 'helpers/sharing/facebookShare';

const { assert } = chai;

describe('facebookShare', () => {
  it('returns correct brand value', () => {
    const result = facebookShare({});
    const actual = result.brand;
    const expected = 'facebook';

    assert.equal(actual, expected);
  });

  it('returns correct icon value', () => {
    const result = facebookShare({});
    const actual = result.icon;
    const expected = 'Facebook';

    assert.equal(actual, expected);
  });

  it('returns label form settings', () => {
    const result = facebookShare({});
    const actual = result.label;
    const expected = settings.shareButtons.facebook.label;

    assert.equal(actual, expected);
  });

  it('returns encoded share url', () => {
    const result = facebookShare('http://foobar.co.uk');
    const actual = result.href;
    const expected = 'http://www.facebook.com/sharer/sharer.php?u=http://foobar.co.uk';

    assert.equal(actual, expected);
  });
});
