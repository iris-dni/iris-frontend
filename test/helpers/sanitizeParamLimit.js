import chai from 'chai';
import sanitizeParamLimit from 'helpers/sanitizeParamLimit';

const { assert } = chai;

describe('calculateParamOffset', () => {
  it('returns limit when passed', () => {
    const actual = sanitizeParamLimit(4);
    const expected = 4;

    assert.equal(actual, expected);
  });

  it('returns fallback when empty', () => {
    const actual = sanitizeParamLimit();
    const expected = 12;

    assert.equal(actual, expected);
  });

  it('returns fallback when empty', () => {
    const actual = sanitizeParamLimit(-10);
    const expected = 12;

    assert.equal(actual, expected);
  });
});
