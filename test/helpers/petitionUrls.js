import { assert } from 'chai';
import * as urlHelpers from 'helpers/petitionUrls';

describe('petitionsPath', () => {
  context('without any filters', () => {
    const actual = urlHelpers.petitionsPath();
    const expected = '/petitions';

    it(`returns ${expected}`, () => assert.equal(actual, expected));
  });

  context('with a city filter', () => {
    const city = { name: 'Oberdorf (BL)', id: 'nwch:2616' };
    const actual = urlHelpers.petitionsPath({ city });
    const expected = '/petitions/oberdorf-bl-nwch:2616';

    it(`returns ${expected}`, () => assert.equal(actual, expected));
  });

  context('with pagination params', () => {
    const actual = urlHelpers.petitionsPath({ page: 5, limit: 10 });
    const expected = '/petitions?page=5&limit=10';

    it(`returns ${expected}`, () => assert.equal(actual, expected));
  });

  context('with pagination params and city', () => {
    const city = { name: 'Oberdorf (BL)', id: 'nwch:2616' };
    const actual = urlHelpers.petitionsPath({ city, page: 5 });
    const expected = '/petitions/oberdorf-bl-nwch:2616?page=5';

    it(`returns ${expected}`, () => assert.equal(actual, expected));
  });
});
