import chai from 'chai';
import settings from 'settings';
import twitterShare from 'helpers/sharing/twitterShare';

const { assert } = chai;

describe('twitterShare', () => {
  it('returns correct brand value', () => {
    const result = twitterShare({});
    const actual = result.brand;
    const expected = 'twitter';

    assert.equal(actual, expected);
  });

  it('returns correct icon value', () => {
    const result = twitterShare({});
    const actual = result.icon;
    const expected = 'Twitter';

    assert.equal(actual, expected);
  });

  it('returns label form settings', () => {
    const result = twitterShare({});
    const actual = result.label;
    const expected = settings.shareButtons.twitter.label;

    assert.equal(actual, expected);
  });

  it('returns encoded share url', () => {
    const result = twitterShare({
      url: 'http://foobar.co.uk',
      text: 'Check this out'
    });
    const actual = result.href;
    const expected = 'http://www.twitter.com/share?url=http://foobar.co.uk&text=Check%20this%20out';

    assert.equal(actual, expected);
  });
});
