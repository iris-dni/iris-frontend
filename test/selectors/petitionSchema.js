import chai from 'chai';
import getPetitionSchema from 'selectors/petitionSchema';
import mockPetition from '../mocks/petition';
import mockPetitionSchema from '../mocks/petitionSchema';

const { assert } = chai;

describe('getPetitionSchema', () => {
  it('returns correct schema', () => {
    const actual = getPetitionSchema(mockPetition.data);
    const expected = mockPetitionSchema;

    assert.deepEqual(actual, expected);
  });
});
