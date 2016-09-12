import chai from 'chai';
import getPaginationLink from 'helpers/getPaginationLink';

const { assert } = chai;

describe('getPaginationLink', () => {
  it('returns page correctly', () => {
    const actual = getPaginationLink(4);
    const expected = '/petitions/page/4';

    assert.equal(actual, expected);
  });

  it('returns page with query string', () => {
    const actual = getPaginationLink(4, 'hello=world&page=1');
    const expected = '/petitions/page/4?hello=world&page=1';

    assert.equal(actual, expected);
  });
});
