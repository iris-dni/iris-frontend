import chai from 'chai';
import getPetitionImage from 'selectors/petitionImage';
import mockPetition from '../mocks/petition';
import mockPetitionWithImage from '../mocks/petitionWithImage';
import mockPetitionWithUnresolvedImage from '../mocks/petitionWithUnresolvedImage';

const { assert } = chai;

describe('imageUrl selector', () => {
  it('returns an empty object for petition with no image', () => {
    const actual = getPetitionImage(mockPetition.data);
    const expected = {};

    assert.deepEqual(actual, expected);
  });

  it('returns an empty object for petition with an unresolved image', () => {
    const actual = getPetitionImage(mockPetitionWithUnresolvedImage.data);
    const expected = {};

    assert.deepEqual(actual, expected);
  });

  context('for petition with an image', () => {
    it('returns correct `src`', () => {
      const result = getPetitionImage(mockPetitionWithImage.data);
      const actual = result.src;
      const expected = 'https://imageproxy-iris-dev.lovelysystems.com/?url=/85a4ba248ea04d7480fd30334484d0da';

      assert.equal(actual, expected);
    });

    it('returns correct `alt`', () => {
      const result = getPetitionImage(mockPetitionWithImage.data);
      const actual = result.alt;
      const expected = mockPetitionWithImage.data.title;

      assert.equal(actual, expected);
    });
  });
});
