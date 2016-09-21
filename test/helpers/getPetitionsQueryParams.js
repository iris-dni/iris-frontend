import chai from 'chai';
import getPetitionsQueryParams from 'helpers/getPetitionsQueryParams';

const { assert } = chai;

describe('getPetitionsQueryParams', () => {
  it('returns correct `page` from params', () => {
    const result = getPetitionsQueryParams({
      page: 2
    });
    const actual = result.page;
    const expected = 2;

    assert.equal(actual, expected);
  });

  it('ignores `page` from query string', () => {
    const result = getPetitionsQueryParams({}, {
      page: 2
    });
    const actual = result.page;
    const expected = 1;

    assert.equal(actual, expected);
  });

  it('parses integers for `page` params', () => {
    const result = getPetitionsQueryParams({
      page: '2'
    }, {});
    const actual = result.page;
    const expected = 2;

    assert.equal(actual, expected);
  });

  it('returns correct `city` from params', () => {
    const result = getPetitionsQueryParams({
      city: 'nwch:5'
    });
    const actual = result.city;
    const expected = 'nwch:5';

    assert.equal(actual, expected);
  });

  it('returns correct `cityName` from params', () => {
    const result = getPetitionsQueryParams({
      cityName: 'aargau'
    });
    const actual = result.cityName;
    const expected = 'aargau';

    assert.equal(actual, expected);
  });

  it('ignores `page` from query string', () => {
    const result = getPetitionsQueryParams({}, {
      page: 2
    });
    const actual = result.page;
    const expected = 1;

    assert.equal(actual, expected);
  });

  it('ignores `city` from query string', () => {
    const result = getPetitionsQueryParams({}, {
      city: 'nwch:5'
    });
    const actual = result.city;
    const expected = '';

    assert.equal(actual, expected);
  });

  it('ignores `cityName` from query string', () => {
    const result = getPetitionsQueryParams({}, {
      cityName: 'aargau'
    });
    const actual = result.cityName;
    const expected = '';

    assert.equal(actual, expected);
  });

  it('returns correct `limit` from query string', () => {
    const result = getPetitionsQueryParams({}, {
      limit: 50
    });
    const actual = result.limit;
    const expected = 50;

    assert.equal(actual, expected);
  });

  it('parses integers for `limit` query string', () => {
    const result = getPetitionsQueryParams({}, {
      limit: '50'
    });
    const actual = result.limit;
    const expected = 50;

    assert.equal(actual, expected);
  });

  it('does not return `city` from query string', () => {
    const result = getPetitionsQueryParams({}, {
      city: 'nwch:5'
    });
    const actual = result.city;
    const expected = '';

    assert.equal(actual, expected);
  });

  it('does not return `cityName` from query string', () => {
    const result = getPetitionsQueryParams({}, {
      cityName: 'aargau'
    });
    const actual = result.cityName;
    const expected = '';

    assert.equal(actual, expected);
  });

  it('does not return `limit` from params', () => {
    const result = getPetitionsQueryParams({
      limit: 50
    }, {
      limit: 100
    });
    const actual = result.limit;
    const expected = 100;

    assert.equal(actual, expected);
  });

  it('returns correct `page` when no arguements', () => {
    const result = getPetitionsQueryParams();
    const actual = result.hasOwnProperty('page');

    assert.isTrue(actual);
  });

  it('returns correct `city` when no arguements', () => {
    const result = getPetitionsQueryParams();
    const actual = result.hasOwnProperty('city');

    assert.isTrue(actual);
  });

  it('returns correct `cityName` when no arguements', () => {
    const result = getPetitionsQueryParams();
    const actual = result.hasOwnProperty('cityName');

    assert.isTrue(actual);
  });

  it('returns correct `limit` when no arguements', () => {
    const result = getPetitionsQueryParams();
    const actual = result.hasOwnProperty('limit');

    assert.isTrue(actual);
  });

  it('returns fallback `page`', () => {
    const result = getPetitionsQueryParams();
    const actual = result.page;
    const expected = 1;

    assert.equal(actual, expected);
  });

  it('returns fallback `limit`', () => {
    const result = getPetitionsQueryParams();
    const actual = result.limit;
    const expected = 12;

    assert.equal(actual, expected);
  });
});
