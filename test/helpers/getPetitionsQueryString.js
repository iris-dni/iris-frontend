import chai from 'chai';
import getPetitionsQueryString from 'helpers/getPetitionsQueryString';

const { assert } = chai;

describe('getPetitionsQueryString', () => {
  it('returns encoded `limit` param', () => {
    const actual = getPetitionsQueryString({
      limit: 50
    });
    const expected = 'limit=50';

    assert.equal(actual, expected);
  });

  it('returns encoded `sort`param', () => {
    const actual = getPetitionsQueryString({
      limit: 50,
      sort: 'date'
    });
    const expected = 'limit=50&sort=date';

    assert.equal(actual, expected);
  });

  it('ignores other params', () => {
    const actual = getPetitionsQueryString({
      page: 2,
      utm_source: 'twitter',
      foo: 'bar'
    });
    const expected = '';

    assert.equal(actual, expected);
  });
});
