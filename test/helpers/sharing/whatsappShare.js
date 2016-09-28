import chai from 'chai';
import settings from 'settings';
import whatsappShare from 'helpers/sharing/whatsappShare';

const { assert } = chai;

describe('whatsappShare', () => {
  it('returns correct brand value', () => {
    const result = whatsappShare({});
    const actual = result.brand;
    const expected = 'whatsapp';

    assert.equal(actual, expected);
  });

  it('returns correct icon value', () => {
    const result = whatsappShare({});
    const actual = result.icon;
    const expected = 'Whatsapp';

    assert.equal(actual, expected);
  });

  it('returns label form settings', () => {
    const result = whatsappShare({});
    const actual = result.label;
    const expected = settings.shareButtons.whatsapp.label;

    assert.equal(actual, expected);
  });

  it('returns encoded share url', () => {
    const result = whatsappShare('http://foobar.co.uk');
    const actual = result.href;
    const expected = 'whatsapp://send?text=http://foobar.co.uk';

    assert.equal(actual, expected);
  });
});
