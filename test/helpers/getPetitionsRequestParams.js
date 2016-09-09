import chai from 'chai';
import getPetitionsRequestParams from 'helpers/getPetitionsRequestParams';

const { assert } = chai;

describe('getPetitionsRequestParams', () => {
  it('always returns resolved city and owner', () => {
    const result = getPetitionsRequestParams({});
    const actual = result.resolve;
    const expected = 'city,owner';

    assert.equal(actual, expected);
  });

  it('always returns order `-created`', () => {
    const result = getPetitionsRequestParams({});
    const actual = result.sort;
    const expected = '-created';

    assert.equal(actual, expected);
  });

  it('returns offset and limit correctly', () => {
    const result = getPetitionsRequestParams({
      limit: 50,
      page: 1
    });
    const actualOffset = result.offset;
    const actualLimit = result.limit;
    const expectedOffset = 0;
    const expectedLimit = 50;

    assert.equal(actualOffset, expectedOffset);
    assert.equal(actualLimit, expectedLimit);
  });

  it('returns offset and limit correctly', () => {
    const result = getPetitionsRequestParams({
      limit: 50,
      page: 6
    });
    const actualOffset = result.offset;
    const actualLimit = result.limit;
    const expectedOffset = 250;
    const expectedLimit = 50;

    assert.equal(actualOffset, expectedOffset);
    assert.equal(actualLimit, expectedLimit);
  });

  it('catches strange offsets and limits', () => {
    const result = getPetitionsRequestParams({
      limit: -100,
      page: -6
    });
    const actualOffset = result.offset;
    const actualLimit = result.limit;
    const expectedOffset = 0;
    const expectedLimit = 12;

    assert.equal(actualOffset, expectedOffset);
    assert.equal(actualLimit, expectedLimit);
  });
});
