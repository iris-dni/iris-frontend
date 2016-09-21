import { assert } from 'chai';
import petitionsPagination from 'selectors/petitionsPagination';
import mockPetitions from '../mocks/petitions';

describe('petitionsPagination', () => {
  it('returns correct totalCount', () => {
    const result = petitionsPagination(mockPetitions);
    const actual = result.totalCount;
    const expected = 50;

    assert.equal(actual, expected);
  });

  it('returns correct showingCount', () => {
    const result = petitionsPagination(mockPetitions);
    const actual = result.showingCount;
    const expected = 10;

    assert.equal(actual, expected);
  });

  it('returns fallback currentPage when no params', () => {
    const result = petitionsPagination(mockPetitions);
    const actual = result.currentPage;
    const expected = 1;

    assert.equal(actual, expected);
  });

  it('returns fallback totalPages when no params', () => {
    const result = petitionsPagination(mockPetitions);
    const actual = result.currentPage;
    const expected = 1;

    assert.equal(actual, expected);
  });

  it('returns currentQuery when given', () => {
    const state = Object.assign({}, mockPetitions, {
      qs: 'page=2&limit=24'
    });
    const result = petitionsPagination(state);
    const actual = result.currentQuery;
    const expected = 'page=2&limit=24';

    assert.equal(actual, expected);
  });

  it('returns currentPage when given in parmas', () => {
    const state = Object.assign({}, mockPetitions, {
      params: { page: 5 }
    });
    const result = petitionsPagination(state);
    const actual = result.currentPage;
    const expected = 5;

    assert.equal(actual, expected);
  });

  context('with limit params', () => {
    const state = Object.assign({}, mockPetitions, {
      params: { limit: 2 }
    });

    it('returns totalPages calculated correctly', () => {
      const result = petitionsPagination(state);
      const actual = result.totalPages;
      const expected = 25;

      assert.equal(actual, expected);
    });
  });

  context('without limit params', () => {
    const state = Object.assign({}, mockPetitions, {});

    it('returns totalPages calculated correctly', () => {
      const result = petitionsPagination(state);
      const actual = result.totalPages;
      const expected = 5;

      assert.equal(actual, expected);
    });
  });

  it('returns prevPage correctly', () => {
    const state = Object.assign({}, mockPetitions, {
      params: { page: 2 }
    });
    const result = petitionsPagination(state);
    const actual = result.prevPage;
    const expected = 1;

    assert.equal(actual, expected);
  });

  it('returns prevPage fallback', () => {
    const state = Object.assign({}, mockPetitions, {
      params: { page: 1 }
    });
    const result = petitionsPagination(state);
    const actual = result.prevPage;
    const expected = 1;

    assert.equal(actual, expected);
  });

  it('returns nextPage correctly', () => {
    const state = Object.assign({}, mockPetitions, {
      params: { page: 2 }
    });
    const result = petitionsPagination(state);
    const actual = result.nextPage;
    const expected = 3;

    assert.equal(actual, expected);
  });

  it('returns nextPage fallback', () => {
    const state = Object.assign({}, mockPetitions, {
      params: { page: 20 }
    });
    const result = petitionsPagination(state);
    const actual = result.nextPage;
    const expected = 5;

    assert.equal(actual, expected);
  });

  it('returns isFirstPage flag on first page', () => {
    const state = Object.assign({}, mockPetitions, {
      params: { page: 1 }
    });
    const result = petitionsPagination(state);
    const actual = result.isFirstPage;

    assert.isTrue(actual);
  });

  it('returns no isFirstPage flag on other pages', () => {
    const state = Object.assign({}, mockPetitions, {
      params: { page: 2 }
    });
    const result = petitionsPagination(state);
    const actual = result.isFirstPage;

    assert.isFalse(actual);
  });

  it('returns isLastPage flag on last page', () => {
    const state = Object.assign({}, mockPetitions, {
      params: { page: 5, limit: 10 }
    });
    const result = petitionsPagination(state);
    const actual = result.isLastPage;

    assert.isTrue(actual);
  });

  it('returns no isLastPage flag on other pages', () => {
    const state = Object.assign({}, mockPetitions, {
      params: { page: 2, limit: 10 }
    });
    const result = petitionsPagination(state);
    const actual = result.isLastPage;

    assert.isFalse(actual);
  });
});
