import chai from 'chai';
import getBrowserTitle, { TITLE_TEMPLATE } from 'server/getBrowserTitle';
import mockPetition from '../mocks/petition';

const { assert } = chai;

describe('getBrowserTitle', () => {
  it('exports TITLE_TEMPLATE', () => {
    const actual = TITLE_TEMPLATE;
    const expected = '%s | iris-frontend';

    assert.equal(actual, expected);
  });

  it('returns default title without args', () => {
    const actual = getBrowserTitle();
    const expected = 'iris-frontend';

    assert.equal(actual, expected);
  });

  it('returns correctly for /petitions route', () => {
    const actual = getBrowserTitle({
      pathname: '/petitions/5'
    }, {
      petition: mockPetition
    });
    const expected = 'Hello world | iris-frontend';

    assert.equal(actual, expected);
  });
});
