import { assert } from 'chai';
import * as urlHelpers from 'helpers/petitionUrls';

describe('petitionUrls helper', () => {
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
      const expected = '/petitions/page/5?limit=10';

      it(`returns ${expected}`, () => assert.equal(actual, expected));
    });

    context('with pagination params and city', () => {
      const city = { name: 'Oberdorf (BL)', id: 'nwch:2616' };
      const actual = urlHelpers.petitionsPath({ city, page: 5 });
      const expected = '/petitions/oberdorf-bl-nwch:2616/page/5';

      it(`returns ${expected}`, () => assert.equal(actual, expected));
    });

    context('with state filter and sorting', () => {
      const state = 'winning';
      const actual = urlHelpers.petitionsPath({ state });
      const expected = '/petitions?state=winning';

      it(`returns ${expected}`, () => assert.equal(actual, expected));
    });
  });

  describe('respondToPetitionPath', () => {
    context('without a token', () => {
      const actual = urlHelpers.respondToPetitionPath({});
      const expected = undefined;

      it(`returns ${expected}`, () => assert.equal(actual, expected));
    });

    context('with a token', () => {
      const actual = urlHelpers.respondToPetitionPath({ token: '1JWSF' });
      const expected = '/respond/1JWSF';

      it(`returns ${expected}`, () => assert.equal(actual, expected));
    });
  });

  describe('respondToPetitionUrl', () => {
    const actual = urlHelpers.respondToPetitionUrl({ token: '1JWSF' });
    const expected = 'http://localhost:8000/respond/1JWSF';

    it(`returns ${expected}`, () => assert.equal(actual, expected));
  });
});
