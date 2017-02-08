import chai from 'chai';
import server from 'server';

const { assert } = chai;

describe('probe_status', () => {
  it('HTTP GET responds with 200 OK', done => {
    server.injectThen({method: 'GET', url: '/probe_status'})
      .then(response => {
        assert.equal(response.statusCode, 200);
        assert.equal(response.payload, 'OK');
        done();
      });
  });

  it('HTTP POST responds with 200 OK', () => {
    server.injectThen({method: 'POST', url: '/probe_status'})
      .then(response => {
        assert.equal(response.statusCode, 200);
        assert.equal(response.payload, 'OK');
      });
  });

  it('On HTTP POST the parameter \'body\' will set further response bodies', () => {
    server.injectThen({method: 'POST', url: '/probe_status?body=UPDATE'})
      .then(response => {
        assert.equal(response.statusCode, 200);
        assert.equal(response.payload, 'UPDATE');
      });
  });

  it('HTTP GET requests responds with 503 if body != OK', () => {
    server.injectThen({method: 'POST', url: '/probe_status?body=UPDATE'})
      .then(response => {
        server.injectThen({method: 'GET', url: '/probe_status'})
          .then(response => {
            assert.equal(response.statusCode, 503);
            assert.equal(response.payload, 'UPDATE');
          });
      });
  });

  it('After reset HTTP GET will response with 200 OK again', () => {
    server.injectThen({method: 'POST', url: '/probe_status?body=OK'})
      .then(response => {
        server.injectThen({method: 'GET', url: '/probe_status'})
          .then(response => {
            assert.equal(response.statusCode, 200);
            assert.equal(response.payload, 'OK');
          });
      });
  });
});
