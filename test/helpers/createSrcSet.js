import chai from 'chai';
import createSrcSet from 'helpers/createSrcSet';

const { assert } = chai;

describe('createSrcSet', () => {
  const baseUrl = 'https://test.com/?url=/4891e30ddceb44008b252cb5ff9ac6bc';

  it('returns correctly with width and height', () => {
    const actual = createSrcSet(baseUrl, { w: 200, h: 400 }, [200, 400, 800]);
    const expected = 'http://localhost:8000/images?domain=https://test.com/&url=/4891e30ddceb44008b252cb5ff9ac6bc&w=200&h=400 200w, http://localhost:8000/images?domain=https://test.com/&url=/4891e30ddceb44008b252cb5ff9ac6bc&w=400&h=800 400w, http://localhost:8000/images?domain=https://test.com/&url=/4891e30ddceb44008b252cb5ff9ac6bc&w=800&h=1600 800w';

    assert.equal(actual, expected);
  });

  it('returns correctly with no height', () => {
    const actual = createSrcSet(baseUrl, { w: 800 }, [200, 400, 800]);
    const expected = 'http://localhost:8000/images?domain=https://test.com/&url=/4891e30ddceb44008b252cb5ff9ac6bc&w=200 200w, http://localhost:8000/images?domain=https://test.com/&url=/4891e30ddceb44008b252cb5ff9ac6bc&w=400 400w, http://localhost:8000/images?domain=https://test.com/&url=/4891e30ddceb44008b252cb5ff9ac6bc&w=800 800w';

    assert.equal(actual, expected);
  });

  it('fails silently', () => {
    const actual = createSrcSet();
    const expected = '';

    assert.equal(actual, expected);
  });
});
