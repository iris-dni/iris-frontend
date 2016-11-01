import chai from 'chai';
import getImageUrl from 'selectors/imageUrl';
import mockImage from '../mocks/image';

const { assert } = chai;

describe('imageUrl selector', () => {
  it('returns source', () => {
    const actual = getImageUrl(mockImage);
    const expected = 'https://imageproxy-iris-dev.lovelysystems.com/?url=/85a4ba248ea04d7480fd30334484d0da';

    assert.equal(actual, expected);
  });

  it('returns undefined with no image data', () => {
    const result = getImageUrl({});
    const actual = typeof result;
    const expected = 'undefined';

    assert.equal(actual, expected);
  });
});
