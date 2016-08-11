import chai from 'chai';
import getPetitionsRequestParams from 'helpers/getPetitionsRequestParams';

const { assert } = chai;

describe('getPetitionsRequestParams', () => {
  it('returns offset and limit correctly', () => {
    const actual = getPetitionsRequestParams({
      limit: 50,
      page: 1
    });
    const expected = {
      offset: 0,
      limit: 50
    };

    assert.deepEqual(actual, expected);
  });

  it('returns offset and limit correctly', () => {
    const actual = getPetitionsRequestParams({
      limit: 100,
      page: 6
    });
    const expected = {
      offset: 500,
      limit: 100
    };

    assert.deepEqual(actual, expected);
  });

  it('catches strange offsets and limits', () => {
    const actual = getPetitionsRequestParams({
      limit: -100,
      page: -6
    });
    const expected = {
      offset: 0,
      limit: 12
    };

    assert.deepEqual(actual, expected);
  });
});
