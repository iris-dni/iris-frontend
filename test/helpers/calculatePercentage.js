import chai from 'chai';
import calculatePercentage from 'helpers/calculatePercentage';

const { assert } = chai;

describe('calculatePercentage', () => {
  it('returns zero when figures do not exist', () => {
    const actual = calculatePercentage(null, undefined);
    const expected = 0;

    assert.equal(actual, expected);
  });

  it('returns a correct percentage', () => {
    const actual = calculatePercentage(20, 50);
    const expected = 40;

    assert.equal(actual, expected);
  });

  it('ignores negative values', () => {
    const actual = calculatePercentage(-20, -50);
    const expected = 0;

    assert.equal(actual, expected);
  });

  it('if required is 0, return 0', () => {
    const actual = calculatePercentage(1, 0);
    const expected = 0;

    assert.equal(actual, expected);
  });

  it('if required is less than 0, return 0', () => {
    const actual = calculatePercentage(1, -5);
    const expected = 0;

    assert.equal(actual, expected);
  });
});
