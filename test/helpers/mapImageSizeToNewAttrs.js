import chai from 'chai';
import mapImageSizeToNewAttrs from 'helpers/mapImageSizeToNewAttrs';

const { assert } = chai;

describe('mapImageSizeToNewAttrs', () => {
  it('returns correctly with width and height', () => {
    const actual = mapImageSizeToNewAttrs(1000, { w: 800, h: 600 });
    const expected = { w: 1000, h: 750 };

    assert.deepEqual(actual, expected);
  });

  it('returns correctly with no height', () => {
    const actual = mapImageSizeToNewAttrs(1000, { w: 800 });
    const expected = { w: 1000, h: '' };

    assert.deepEqual(actual, expected);
  });

  it('parses integers', () => {
    const actual = mapImageSizeToNewAttrs('650', { w: '100', h: '100' });
    const expected = { w: 650, h: 650 };

    assert.deepEqual(actual, expected);
  });

  it('fails silently', () => {
    const actual = mapImageSizeToNewAttrs();
    const expected = {};

    assert.deepEqual(actual, expected);
  });
});
