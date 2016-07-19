import chai from 'chai';
import server from './../src/server';

const assert = chai.assert;

describe('GET /', () => {
  it('responds with 200', done => {
    server.injectThen('/')
      .then(response => {
        assert.equal(response.statusCode, 200);
        done();
      });
  });
});

describe('GET /basic', () => {
  it('responds with 200', done => {
    server.injectThen('/basic')
      .then(response => {
        assert.equal(response.statusCode, 200);
        done();
      });
  });
});

describe('GET a not defined route', () => {
  it('responds with 404', done => {
    server.injectThen('/not-defined')
      .then(response => {
        assert.equal(response.statusCode, 404);
        done();
      });
  });
});
