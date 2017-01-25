import chai from 'chai';
import createResponsiveImageAttributes from 'helpers/createResponsiveImageAttributes';

const { assert } = chai;

describe('ResponsiveImageAttributes', () => {
  const baseUrl = 'https://test.com/?url=/4891e30ddceb44008b252cb5ff9ac6bc';
  const srcSet = [200, 400, 800];
  const attrs = { w: 200, h: 400 };
  const sizes = '(min-width: 900px) 320px, (min-width: 600px) 50vw, 100vw';
  const expectedSrcSet = 'http://localhost:8000/images?domain=https://test.com/&url=/4891e30ddceb44008b252cb5ff9ac6bc&w=200&h=400 200w, http://localhost:8000/images?domain=https://test.com/&url=/4891e30ddceb44008b252cb5ff9ac6bc&w=400&h=800 400w, http://localhost:8000/images?domain=https://test.com/&url=/4891e30ddceb44008b252cb5ff9ac6bc&w=800&h=1600 800w';

  it('returns srcSet and sizes if srcSet was given', () => {
    const actual = createResponsiveImageAttributes(baseUrl, srcSet, attrs, sizes);
    const expected = { srcSet: expectedSrcSet, sizes: sizes };

    assert.deepEqual(actual, expected);
  });

  it('returns an empty object if srcSet was empty', () => {
    const actual = createResponsiveImageAttributes(baseUrl, [], attrs, sizes);
    const expected = {};

    assert.deepEqual(actual, expected);
  });
});
