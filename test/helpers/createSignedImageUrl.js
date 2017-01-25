import { assert } from 'chai';
import createSignedImageUrl from 'helpers/createSignedImageUrl';

describe('createSignedImageUrl', () => {
  const baseUrl = 'https://test.com/?url=/4891e30ddceb44008b252cb5ff9ac6bc';

  context('for an image without params', () => {
    it('returns correctly formed url with rotate op', () => {
      const actual = createSignedImageUrl(baseUrl);
      const expected = 'http://localhost:8000/images?domain=https://test.com/&url=/4891e30ddceb44008b252cb5ff9ac6bc&op=rotate';

      assert.equal(actual, expected);
    });
  });

  context('for an image with params', () => {
    it('returns correctly formed url', () => {
      const actual = createSignedImageUrl(baseUrl, {
        w: 1000,
        h: 500
      });
      const expected = 'http://localhost:8000/images?domain=https://test.com/&url=/4891e30ddceb44008b252cb5ff9ac6bc&w=1000&h=500';

      assert.equal(actual, expected);
    });
  });

  context('for an image with no height param', () => {
    it('returns correctly formed url', () => {
      const actual = createSignedImageUrl(baseUrl, {
        w: 1000
      });
      const expected = 'http://localhost:8000/images?domain=https://test.com/&url=/4891e30ddceb44008b252cb5ff9ac6bc&w=1000';

      assert.equal(actual, expected);
    });
  });

  it('fails silently', () => {
    const actual = createSignedImageUrl();
    const expected = '';

    assert.equal(actual, expected);
  });
});
