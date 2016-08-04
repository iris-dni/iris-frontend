import chai from 'chai';
import getPageSchema from 'server/getPageSchema';
import mockPetition from '../mocks/petition';
import mockPetitionSchema from '../mocks/petitionSchema';

const { assert } = chai;

describe('getPageSchema', () => {
  it('returns correctly for PetitionContainer', () => {
    const actual = getPageSchema('PetitionContainer', {
      petition: mockPetition
    });
    const expected = mockPetitionSchema;

    assert.deepEqual(actual, expected);
  });
});
