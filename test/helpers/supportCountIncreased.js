import chai from 'chai';
import supportCountIncreased from 'helpers/supportCountIncreased';

const { assert } = chai;

describe('getIncludedAssetPath', () => {
  it('returns `false` when both totals are equal', () => {
    const actual = supportCountIncreased({
      supporters: { amount: 10 }
    }, {
      supporters: { amount: 10 }
    });
    const expected = false;

    assert.equal(actual, expected);
  });

  it('returns `false` when updatedPetition total is less', () => {
    const actual = supportCountIncreased({
      supporters: { amount: 10 }
    }, {
      supporters: { amount: 9 }
    });
    const expected = false;

    assert.equal(actual, expected);
  });

  it('returns `true` when updatedPetition total is higher', () => {
    const actual = supportCountIncreased({
      supporters: { amount: 10 }
    }, {
      supporters: { amount: 11 }
    });
    const expected = true;

    assert.equal(actual, expected);
  });

  it('returns `false` as a falback', () => {
    const actual = supportCountIncreased({
      supporters: {}
    }, {
      supporters: {}
    });
    const expected = false;

    assert.equal(actual, expected);
  });
});
