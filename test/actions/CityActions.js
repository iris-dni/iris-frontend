import { assert } from 'chai';

import {
  clearCurrentCity
} from 'actions/CityActions';

describe('CityActions', () => {
  describe('clearCurrentCity', () => {
    it('returns CLEAR_CURRENT_CITY action', () => {
      const result = clearCurrentCity();
      const actual = result.type;
      const expected = 'CLEAR_CURRENT_CITY';

      assert.equal(actual, expected);
    });

    it('passes null as currentCity object', () => {
      const result = clearCurrentCity();
      const actual = result.currentCity;
      const expected = null;

      assert.equal(actual, expected);
    });
  });
});
