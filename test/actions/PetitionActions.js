import chai from 'chai';
import mockPetition from '../mocks/petition';
import mockPetitions from '../mocks/petitions';

import {
  requestPetition,
  receivePetition,
  requestPetitions,
  receivePetitions
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

  it('requestPetitions returns REQUEST_PETITIONS action', () => {
    const result = requestPetitions();
    const actual = result.type;
    const expected = 'REQUEST_PETITIONS';

    assert.equal(actual, expected);
  });

  it('receivePetitions returns RECEIVE_PETITIONS action', () => {
    const result = receivePetitions();
    const actual = result.type;
    const expected = 'RECEIVE_PETITIONS';

    assert.equal(actual, expected);
  });

  it('receivePetitions passes petitions object', () => {
    const result = receivePetitions(mockPetitions);
    const actual = result.petitions;
    const expected = mockPetitions;

    assert.deepEqual(actual, expected);
  });
});