import chai from 'chai';
import server from 'server';

const { assert } = chai;

describe('GET /', () => {
  it('responds with 200', done => {
    server.injectThen('/')
      .then(response => {
        const actual = response.statusCode;
        const expected = 200;

        assert.equal(actual, expected);
        done();
      });
  });
});

describe('GET /basic', () => {
  it('responds with 200', done => {
    server.injectThen('/basic')
      .then(response => {
        const actual = response.statusCode;
        const expected = 200;

        assert.equal(actual, expected);
        done();
      });
  });
});

describe('GET a not defined route', () => {
  it('responds with 404', done => {
    server.injectThen('/not-defined')
      .then(response => {
        const actual = response.statusCode;
        const expected = 404;

        assert.equal(actual, expected);
        done();
      });
  });
});