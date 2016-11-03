import chai from 'chai';
import getPetitionOpenGraph from 'selectors/petitionOpenGraph';
import mockPetition from '../mocks/petition';
import mockPetitionWithImage from '../mocks/petitionWithImage';
import mockPetitionOpenGraph from '../mocks/petitionOpenGraph';
import mockPetitionWithImageOpenGraph from '../mocks/petitionWithImageOpenGraph';

const { assert } = chai;

describe('petitionOpenGraph selector', () => {
  context('without an image', () => {
    it('returns correct OG data', () => {
      const actual = getPetitionOpenGraph(mockPetition.data);
      const expected = mockPetitionOpenGraph;

      assert.deepEqual(actual, expected);
    });
  });

  context('with an image', () => {
    it('returns correct OG data', () => {
      const actual = getPetitionOpenGraph(mockPetitionWithImage.data);
      const expected = mockPetitionWithImageOpenGraph;

      assert.deepEqual(actual, expected);
    });
  });

  it('fails silently', () => {
    const actual = getPetitionOpenGraph();
    const expected = [{
      content: 'article',
      property: 'og:type'
    }];

    assert.deepEqual(actual, expected);
  });
});
