import chai from 'chai';
import petitions from 'reducers/petitions';
import mockPetitions from '../mocks/petitions';

const { assert } = chai;

describe('petitions reducer', () => {
  it('handles the RECEIVE_PETITIONS action', () => {
    const actual = petitions({}, {
      type: 'RECEIVE_PETITIONS',
      petitions: mockPetitions
    });
    const expected = mockPetitions;

    assert.deepEqual(actual, expected);
  });

  it('provides fallback state', () => {
    const actual = petitions(undefined, {});
    const expected = {};

    assert.deepEqual(actual, expected);
  });
});
