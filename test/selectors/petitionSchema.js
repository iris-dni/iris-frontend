import chai from 'chai';
import getPetitionSchema from 'selectors/petitionSchema';
import mockPetition from '../mocks/petition';
import mockPetitionWithImage from '../mocks/petitionWithImage';
import mockPetitionSchema from '../mocks/petitionSchema';
import mockPetitionWithImageSchema from '../mocks/petitionWithImageSchema';

const { assert } = chai;

describe('petitionSchema selector', () => {
  context('without an image', () => {
    it('returns correct schema', () => {
      const actual = getPetitionSchema(mockPetition.data);
      const expected = mockPetitionSchema;

      assert.deepEqual(actual, expected);
    });
  });

  context('with an image', () => {
    it('returns correct schema', () => {
      const actual = getPetitionSchema(mockPetitionWithImage.data);
      const expected = mockPetitionWithImageSchema;

      assert.deepEqual(actual, expected);
    });
  });
});
