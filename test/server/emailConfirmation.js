import moxios from 'moxios';
import chai from 'chai';
import server from 'server';

const { assert } = chai;

describe('email confirmation', () => {
  context('/support route', () => {
    context('without a key', () => {
      it('responds with 500 status', done => {
        server.injectThen('/confirm/email/support')
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

        server.injectThen('/confirm/email/support?key=1234')
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
        server.injectThen('/confirm/email/support?key=invalid1334')
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

