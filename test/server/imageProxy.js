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
          const expected = 'https://test.com?url=/4891e30ddceb44008b252cb5ff9ac6bc&deg=auto&op=rotate,resize&sig=82412667dc66ec3985e28189e7e3c84ffc78f8e1';

          assert.equal(actual, expected);
          done();
        });
    });
  });

  context('with encoded query params', () => {
    it('responds with 301 status', done => {
      server.injectThen('/images?domain=https://test.com&amp;url=/4891e30ddceb44008b252cb5ff9ac6bc')
        .then(response => {
          const actual = response.statusCode;
          const expected = 301;

          assert.equal(actual, expected);
          done();
        });
    });

    it('returns params in URL', done => {
      server.injectThen('/images?domain=https://test.com&amp;url=/4891e30ddceb44008b252cb5ff9ac6bc&amp;w=1000&amp;h=300')
        .then(response => {
          const actual = response.headers.location;
          const expected = 'https://test.com?url=/4891e30ddceb44008b252cb5ff9ac6bc&w=1000&h=300&deg=auto&op=rotate,resize&sig=33b2901eeed834c0d36a64a88b4007858d30cc36';

          assert.equal(actual, expected);
          done();
        });
    });
  });

  context('with additional params', () => {
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
          const expected = 'https://test.com?url=/4891e30ddceb44008b252cb5ff9ac6bc&w=1000&h=300&deg=auto&op=rotate,resize&sig=33b2901eeed834c0d36a64a88b4007858d30cc36';

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

