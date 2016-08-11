import chai from 'chai';
import calculateParamOffset from 'helpers/calculateParamOffset';

const { assert } = chai;

describe('calculateParamOffset', () => {
  it('returns correct offset for page 4', () => {
    const actual = calculateParamOffset(4, 50);
    const expected = 150;

    assert.equal(actual, expected);
  });

  it('returns correct offset for page 1', () => {
    const actual = calculateParamOffset(1, 50);
    const expected = 0;

    assert.equal(actual, expected);
  });

  it('returns offset 0 for negative pages', () => {
    const actual = calculateParamOffset(-1, 50);
    const expected = 0;

    assert.equal(actual, expected);
  });

  it('returns corret offset for negative limits', () => {
    const actual = calculateParamOffset(2, -50);
    const expected = 12;

    assert.equal(actual, expected);
  });
});
