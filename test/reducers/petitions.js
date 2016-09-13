import chai from 'chai';
import petitions from 'reducers/petitions';
import mockPetitions from '../mocks/petitions';

const { assert } = chai;

describe('petitions reducer', () => {
  it('handles the REQUEST_PETITIONS action', () => {
    const actual = petitions({}, {
      type: 'REQUEST_PETITIONS'
    });
    const expected = {
      isLoading: true
    };

    assert.deepEqual(actual, expected);
  });

  it('handles the RECEIVE_PETITIONS action', () => {
    const actual = petitions({}, {
      type: 'RECEIVE_PETITIONS',
      petitions: mockPetitions,
      params: {}
    });
    const expected = Object.assign({}, mockPetitions, {
      isLoading: false,
      totalCount: mockPetitions.total,
      params: {},
      qs: ''
    });

    assert.deepEqual(actual, expected);
  });

  it('provides fallback state', () => {
    const actual = petitions(undefined, {});
    const expected = {};

    assert.deepEqual(actual, expected);
  });
});
