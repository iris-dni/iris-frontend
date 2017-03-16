import chai from 'chai';
import calculateImageHeight from 'helpers/calculateImageHeight';

const { assert } = chai;

describe('calculateImageHeight', () => {
  it('returns the expected height', () => {
    const actual = calculateImageHeight(1000, { w: 800, h: 600 });
    const expected = 750;

    assert.equal(actual, expected);
  });

  it('returns an integer', () => {
    const actual = calculateImageHeight(1000, { w: '800', h: '600' });

    assert.typeOf(actual, 'number');
  });

  it('fails silently', () => {
    const actual = calculateImageHeight(1000, { h: 1000 });
    const expected = '';

    assert.deepEqual(actual, expected);
  });
});
