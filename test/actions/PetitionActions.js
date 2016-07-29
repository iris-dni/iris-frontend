import chai from 'chai';
import mockPetition from '../mocks/petition';

import {
  requestPetition,
  receivePetition
} from 'actions/PetitionActions';

const { assert } = chai;

describe('PetitionActions', () => {
  it('requestPetition returns REQUEST_PETITION action', () => {
    const result = requestPetition();
    const actual = result.type;
    const expected = 'REQUEST_PETITION';

    assert.equal(actual, expected);
  });

  it('receivePetition returns RECEIVE_PETITION action', () => {
    const result = receivePetition();
    const actual = result.type;
    const expected = 'RECEIVE_PETITION';

    assert.equal(actual, expected);
  });

  it('receivePetition passes petition object', () => {
    const result = receivePetition(mockPetition);
    const actual = result.petition;
    const expected = mockPetition;

    assert.deepEqual(actual, expected);
  });
});
