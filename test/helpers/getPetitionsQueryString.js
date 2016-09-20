import chai from 'chai';
import getPetitionsQueryString from 'helpers/getPetitionsQueryString';

const { assert } = chai;

describe('getPetitionsQueryString', () => {
  it('returns encoded `page` param', () => {
    const actual = getPetitionsQueryString({
      page: 2
    });
    const expected = 'page=2';

    assert.equal(actual, expected);
  });

  it('returns encoded `city` param', () => {
    const actual = getPetitionsQueryString({
      page: 2,
      city: 5
    });
    const expected = 'page=2&city=5';

    assert.equal(actual, expected);
  });

  it('returns encoded `limit` param', () => {
    const actual = getPetitionsQueryString({
      page: 2,
      city: 5,
      limit: 50
    });
    const expected = 'page=2&city=5&limit=50';

    assert.equal(actual, expected);
  });

  it('ignores other params', () => {
    const actual = getPetitionsQueryString({
      page: 2,
      utm_source: 'twitter',
      foo: 'bar'
    });
    const expected = 'page=2';

    assert.equal(actual, expected);
  });
});
