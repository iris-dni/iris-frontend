import { assert } from 'chai';
import createImageUrl from 'helpers/createImageUrl';

describe('createImageUrl', () => {
  const baseUrl = 'https://test.com/?url=/4891e30ddceb44008b252cb5ff9ac6bc';

  context('for an image without params', () => {
    it('returns correctly formed url', () => {
      const actual = createImageUrl(baseUrl);
      const expected = '/images?domain=https://test.com/&url=/4891e30ddceb44008b252cb5ff9ac6bc';

      assert.equal(actual, expected);
    });
  });

  context('for an image with params', () => {
    it('returns correctly formed url', () => {
      const actual = createImageUrl(baseUrl, {
        w: 1000,
        h: 500
      });
      const expected = '/images?domain=https://test.com/&url=/4891e30ddceb44008b252cb5ff9ac6bc&w=1000&h=500';

      assert.equal(actual, expected);
    });
  });
});
