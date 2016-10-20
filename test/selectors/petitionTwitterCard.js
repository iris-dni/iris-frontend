import chai from 'chai';
import getPetitionTwitterCard from 'selectors/petitionTwitterCard';
import mockPetition from '../mocks/petition';
import mockPetitionTwitterCard from '../mocks/petitionTwitterCard';

const { assert } = chai;

describe('petitionTwitterCard selector', () => {
  it('returns correct twitter card data', () => {
    const actual = getPetitionTwitterCard(mockPetition.data);
    const expected = mockPetitionTwitterCard;

    assert.deepEqual(actual, expected);
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
