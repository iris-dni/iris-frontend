import chai from 'chai';
import server from 'server';

const { assert } = chai;

describe('image proxy', () => {
  context('with a domain and url', () => {
    it('responds with 301 status', done => {
      server.injectThen('/images?domain=https://test.com&url=/4891e30ddceb44008b252cb5ff9ac6bc')
        .then(response => {
          const actual = response.statusCode;
          const expected = 301;

          assert.equal(actual, expected);
          done();
        });
    });

    it('responds with correct signed url', done => {
      server.injectThen('/images?domain=https://test.com&url=/4891e30ddceb44008b252cb5ff9ac6bc')
        .then(response => {
          const actual = response.headers.location;
          const expected = 'https://test.com?url=/4891e30ddceb44008b252cb5ff9ac6bc&sig=e850e88f08d8783abf8f5403c30fdc4fa02ef536';

          assert.equal(actual, expected);
          done();
        });
    });
  });

  context('with aadditional params', () => {
    it('responds with 301 status', done => {
      server.injectThen('/images?domain=https://test.com&url=/4891e30ddceb44008b252cb5ff9ac6bc&w=1000&h=300')
        .then(response => {
          const actual = response.statusCode;
          const expected = 301;

          assert.equal(actual, expected);
          done();
        });
    });

    it('returns params in URL', done => {
      server.injectThen('/images?domain=https://test.com&url=/4891e30ddceb44008b252cb5ff9ac6bc&w=1000&h=300')
        .then(response => {
          const actual = response.headers.location;
          const expected = 'https://test.com?url=/4891e30ddceb44008b252cb5ff9ac6bc&w=1000&h=300&sig=112f36f972eb890175dd06424b583bb2f70ad7da';

          assert.equal(actual, expected);
          done();
        });
    });
  });

  context('without domain param', () => {
    it('responds with 404 status', done => {
      server.injectThen('/images?url=/4891e30ddceb44008b252cb5ff9ac6bc&w=1000&h=300')
        .then(response => {
          const actual = response.statusCode;
          const expected = 404;

          assert.equal(actual, expected);
          done();
        });
    });
  });

  context('without url param', () => {
    it('responds with 404 status', done => {
      server.injectThen('/images?domain=https://test.com&w=1000&h=300')
        .then(response => {
          const actual = response.statusCode;
          const expected = 404;

          assert.equal(actual, expected);
          done();
        });
    });
  });
});

