import chai from 'chai';
import petition from 'reducers/petition';
import mockPetition from '../mocks/petition';

const { assert } = chai;

describe('petition reducer', () => {
  it('handles the RECEIVE_PETITION action', () => {
    const actual = petition({}, {
      type: 'RECEIVE_PETITION',
      petition: mockPetition
    });
    const expected = mockPetition;

    assert.deepEqual(actual, expected);
  });

  it('provides fallback state', () => {
    const actual = petition(undefined, {});
    const expected = {};

    assert.deepEqual(actual, expected);
  });
});
