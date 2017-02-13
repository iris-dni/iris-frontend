import moxios from 'moxios';
import chai from 'chai';
import server from 'server';

const { assert } = chai;

describe('email confirmation', () => {
  context('/supporter route', () => {
    context('without a key', () => {
      it('responds with 500 status', done => {
        server.injectThen('/confirm/email/supporter')
          .then(response => {
            const actual = response.statusCode;
            const expected = 500;

            assert.equal(actual, expected);
            done();
          });
      });
    });

    context('with a valid key', () => {
      beforeEach(() => {
        moxios.install();
      });

      afterEach(() => {
        moxios.uninstall();
      });

      it('responds with 200 status', done => {
        moxios.stubRequest(/.*/, {
          status: 200,
          response: { error: [] }
        });

        server.injectThen('/confirm/email/supporter?key=1234')
          .then(response => {
            const actual = response.statusCode;
            const expected = 200;

            assert.equal(actual, expected);
            assert.isTrue(response.payload.indexOf('Email address confirmed') > -1);
            done();
          });
      });
    });

    context('with a valid key but API responded an error', () => {
      beforeEach(() => {
        moxios.install();
      });

      afterEach(() => {
        moxios.uninstall();
      });

      it('responds with 200 status', done => {
        moxios.stubRequest(/.*/, {
          status: 400,
          headers: {'"X-Iris-Api-Key': 'some-key'},
          response: {error: {code: 400, description: 'Bad Request: Already used'}}
        });

        server.injectThen('/confirm/email/supporter?key=1234')
          .then(response => {
            const actual = response.statusCode;
            const expected = 200;

            assert.equal(actual, expected);
            assert.isTrue(response.payload.indexOf('Email address already confirmed') > -1);
            done();
          });
      });
    });

    context('with an invalid key', () => {
      it('responds with 500 status', done => {
        server.injectThen('/confirm/email/supporter?key=invalid1334')
          .then(response => {
            const actual = response.statusCode;
            const expected = 500;

            assert.equal(actual, expected);
            done();
          });
      });
    });
  });

  context('/petition route', () => {
    context('without a key', () => {
      it('responds with 500 status', done => {
        server.injectThen('/confirm/email/petition')
          .then(response => {
            const actual = response.statusCode;
            const expected = 500;

            assert.equal(actual, expected);
            done();
          });
      });
    });

    context('with a valid key', () => {
      beforeEach(() => {
        moxios.install();
      });

      afterEach(() => {
        moxios.uninstall();
      });

      it('responds with 200 status', done => {
        moxios.stubRequest(/.*/, {
          status: 200,
          response: { error: [] }
        });

        server.injectThen('/confirm/email/petition?key=1234')
          .then(response => {
            const actual = response.statusCode;
            const expected = 200;

            assert.equal(actual, expected);
            done();
          });
      });
    });

    context('with an invalid key', () => {
      it('responds with 500 status', done => {
        server.injectThen('/confirm/email/petition?key=invalid1334')
          .then(response => {
            const actual = response.statusCode;
            const expected = 500;

            assert.equal(actual, expected);
            done();
          });
      });
    });
  });

  context('random route', () => {
    it('responds with 404 status', done => {
      server.injectThen('/confirm/email/blah')
        .then(response => {
          const actual = response.statusCode;
          const expected = 404;

          assert.equal(actual, expected);
          done();
        });
    });
  });
});

