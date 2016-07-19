import chai from 'chai';
import counter from '../../src/reducers/counter';

const assert = chai.assert;

describe('counter reducer', () => {
  it('provides the initial state', () => {
    const actual = counter(undefined, {});
    const expected = 0;

    assert.equal(actual, expected);
  });

  it('handles the COUNTER_PLUS action', () => {
    const actual = counter(1, { type: 'COUNTER_PLUS' });
    const expected = 2;

    assert.equal(actual, expected);
  });

  it('handles the COUNTER_MINUS action', () => {
    const actual = counter(2, { type: 'COUNTER_MINUS' });
    const expected = 1;

    assert.equal(actual, expected);
  });
});
