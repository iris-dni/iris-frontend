import { assert } from 'chai';
import currentCity from 'reducers/currentCity';

describe('currentCity reducer', () => {
  it('handles the UPDATE_CURRENT_CITY action', () => {
    const mockCity = { name: 'Aarau', id: 'nwch:1' };

    const actual = currentCity({}, {
      type: 'UPDATE_CURRENT_CITY',
      currentCity: mockCity
    });
    const expected = { currentCity: mockCity };

    assert.deepEqual(actual, expected);
  });

  it('handles the CLEAR_CURRENT_CITY action', () => {
    const actual = currentCity({}, {
      type: 'CLEAR_CURRENT_CITY',
      city: null
    });
    const expected = { currentCity: null };

    assert.deepEqual(actual, expected);
  });
});
