import moxios from 'moxios';
import chai from 'chai';
import server from 'server';
import mockPetition from './mocks/petition';
import mockPetitions from './mocks/petitions';

const { assert } = chai;

describe('GET /', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('responds with 200', done => {
    moxios.stubRequest(/.*/, {
      status: 200,
      response: mockPetitions
    });

    server.injectThen('/')
      .then(response => {
        const actual = response.statusCode;
        const expected = 200;

        assert.equal(actual, expected);
        done();
      });
  });
});

describe('GET /petitions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('responds with 200', done => {
    moxios.stubRequest(/.*/, {
      status: 200,
      response: mockPetitions
    });

    server.injectThen('/petitions')
      .then(response => {
        const actual = response.statusCode;
        const expected = 200;

        assert.equal(actual, expected);
        done();
      });
  });
});

describe('GET /petitions/:id', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('responds with 200', done => {
    moxios.stubRequest(/.*/, {
      status: 200,
      response: mockPetition
    });

    server.injectThen('/petitions/10')
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

describe('GET /trust/support/:id', () => {
  it('responds with 200', done => {
    server.injectThen('/trust/support/1BV3l')
      .then(response => {
        const actual = response.statusCode;
        const expected = 200;

        assert.equal(actual, expected);
        done();
      });
  });
});
