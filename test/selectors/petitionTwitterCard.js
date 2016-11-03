import chai from 'chai';
import getPetitionTwitterCard from 'selectors/petitionTwitterCard';
import mockPetition from '../mocks/petition';
import mockPetitionWithImage from '../mocks/petitionWithImage';
import mockPetitionTwitterCard from '../mocks/petitionTwitterCard';
import mockPetitionWithImageTwitterCard from '../mocks/petitionWithImageTwitterCard';

const { assert } = chai;

describe('petitionTwitterCard selector', () => {
  context('without an image', () => {
    it('returns correct twitter card data', () => {
      const actual = getPetitionTwitterCard(mockPetition.data);
      const expected = mockPetitionTwitterCard;

      assert.deepEqual(actual, expected);
    });
  });

  context('with an image', () => {
    it('returns correct twitter card data', () => {
      const actual = getPetitionTwitterCard(mockPetitionWithImage.data);
      const expected = mockPetitionWithImageTwitterCard;

      assert.deepEqual(actual, expected);
    });
  });

  it('fails silently', () => {
    const actual = getPetitionTwitterCard();
    const expected = [
      {
        content: 'summary',
        name: 'twitter:card'
      },
      {
        content: '@azmedien',
        name: 'twitter:site'
      }
    ];

    assert.deepEqual(actual, expected);
  });
});
