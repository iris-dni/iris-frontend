import chai from 'chai';
import getPetitionOpenGraph from 'selectors/petitionOpenGraph';
import mockPetition from '../mocks/petition';
import mockPetitionWithImage from '../mocks/petitionWithImage';
import mockPetitionOpenGraph from '../mocks/petitionOpenGraph';
import mockPetitionWithImageOpenGraph from '../mocks/petitionWithImageOpenGraph';
import settings from 'settings';

const { assert } = chai;

describe('petitionOpenGraph selector', () => {
  context('without an image', () => {
    before(() => {
      settings.ogFallbackImage = '/dist/assets/image/fallbackimage.png';
    });

    after(() => {
      settings.ogFallbackImage = '';
    });

    it('returns correct OG data with the ogFallbackImage', () => {
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

  context('without a petition', () => {
    it('fails silently', () => {
      const actual = getPetitionOpenGraph();
      const expected = [
        {
          property: 'og:image:width',
          content: 1200
        }, {
          property: 'og:image:height',
          content: 630
        }, {
          content: 'article',
          property: 'og:type'
        }
      ];

      assert.deepEqual(actual, expected);
    });
  });
});
