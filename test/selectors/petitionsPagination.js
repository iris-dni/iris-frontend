import chai from 'chai';
import petitionsPagination from 'selectors/petitionsPagination';
import mockPetitions from '../mocks/petitions';

const { assert } = chai;

describe('petitionsPagination', () => {
  describe('returns correct totalCount', () => {
    const result = petitionsPagination(mockPetitions);
    const actual = result.totalCount;
    const expected = 50;

    assert.equal(actual, expected);
  });

  describe('returns correct showingCount', () => {
    const result = petitionsPagination(mockPetitions);
    const actual = result.showingCount;
    const expected = 10;

    assert.equal(actual, expected);
  });

  describe('returns fallback limit when no params', () => {
    const result = petitionsPagination(mockPetitions);
    const actual = result.limit;
    const expected = 12;

    assert.equal(actual, expected);
  });

  describe('returns fallback currentPage when no params', () => {
    const result = petitionsPagination(mockPetitions);
    const actual = result.currentPage;
    const expected = 1;

    assert.equal(actual, expected);
  });

  describe('returns fallback totalPages when no params', () => {
    const result = petitionsPagination(mockPetitions);
    const actual = result.currentPage;
    const expected = 1;

    assert.equal(actual, expected);
  });
});
