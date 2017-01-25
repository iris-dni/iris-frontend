import moxios from 'moxios';
import chai from 'chai';
import server from 'server';
import mockPetition from './mocks/petition';
import mockPetitionSupportable from './mocks/petitionSupportable';
import mockPetitionProcessing from './mocks/petitionProcessing';
import mockPetitionRejected from './mocks/petitionRejected';
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

describe('GET /imprint', () => {
  it('responds with 200', done => {
    server.injectThen('/imprint')
      .then(response => {
        const actual = response.statusCode;
        const expected = 200;

        assert.equal(actual, expected);
        done();
      });
  });
});

describe('GET /about', () => {
  it('responds with 200', done => {
    server.injectThen('/about')
      .then(response => {
        const actual = response.statusCode;
        const expected = 200;

        assert.equal(actual, expected);
        done();
      });
  });
});

describe('GET /terms', () => {
  it('responds with 200', done => {
    server.injectThen('/terms')
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

describe('GET /petitions/page/3', () => {
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

    server.injectThen('/petitions/page/3')
      .then(response => {
        const actual = response.statusCode;
        const expected = 200;

        assert.equal(actual, expected);
        done();
      });
  });
});

describe('GET /petitions/abtwil-nwch:4', () => {
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

    server.injectThen('/petitions/abtwil-nwch:4')
      .then(response => {
        const actual = response.statusCode;
        const expected = 200;

        assert.equal(actual, expected);
        done();
      });
  });
});

describe('GET /petitions/abtwil-nwch:4/page/3', () => {
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

    server.injectThen('/petitions/abtwil-nwch:4/page/3')
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

  context('for a regular petition', done => {
    it('responds with 200', done => {
      moxios.stubRequest(/.*/, {
        status: 200,
        response: mockPetition
      });

      server.injectThen('/petitions/1BV3l')
        .then(response => {
          const actual = response.statusCode;
          const expected = 200;

          assert.equal(actual, expected);
          done();
        });
    });
  });

  context('for a rejected petition', done => {
    it('responds with 301', done => {
      moxios.stubRequest(/.*/, {
        status: 200,
        response: mockPetitionRejected
      });

      server.injectThen('/petitions/1BV3l')
        .then(response => {
          const actual = response.statusCode;
          const expected = 301;

          assert.equal(actual, expected);
          done();
        });
    });
  });
});

describe('GET /petitions/:id/edit', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  context('for a supportable petition', done => {
    it('responds with 301', done => {
      moxios.stubRequest(/.*/, {
        status: 200,
        response: mockPetitionSupportable
      });

      server.injectThen('/petitions/1BV3l/edit')
        .then(response => {
          const actual = response.statusCode;
          const expected = 301;

          assert.equal(actual, expected);
          done();
        });
    });
  });

  context('for a rejected petition', done => {
    it('responds with 200', done => {
      moxios.stubRequest(/.*/, {
        status: 200,
        response: mockPetitionRejected
      });

      server.injectThen('/petitions/1BV3l/edit')
        .then(response => {
          const actual = response.statusCode;
          const expected = 200;

          assert.equal(actual, expected);
          done();
        });
    });
  });

  context('for a draft petition', done => {
    it('responds with 200', done => {
      moxios.stubRequest(/.*/, {
        status: 200,
        response: mockPetition
      });

      server.injectThen('/petitions/1BV3l/edit')
        .then(response => {
          const actual = response.statusCode;
          const expected = 200;

          assert.equal(actual, expected);
          done();
        });
    });
  });
});

describe('GET /petitions/:id/preview', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  context('for a supportable petition', done => {
    it('responds with 301', done => {
      moxios.stubRequest(/.*/, {
        status: 200,
        response: mockPetitionSupportable
      });

      server.injectThen('/petitions/1BV3l/preview')
        .then(response => {
          const actual = response.statusCode;
          const expected = 301;

          assert.equal(actual, expected);
          done();
        });
    });
  });

  context('for a draft petition', done => {
    it('responds with 200', done => {
      moxios.stubRequest(/.*/, {
        status: 200,
        response: mockPetition
      });

      server.injectThen('/petitions/1BV3l/preview')
        .then(response => {
          const actual = response.statusCode;
          const expected = 200;

          assert.equal(actual, expected);
          done();
        });
    });
  });
});

describe('GET /trust/publish/:id', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  context('for a supportable petition', done => {
    it('responds with 301', done => {
      moxios.stubRequest(/.*/, {
        status: 200,
        response: mockPetitionSupportable
      });

      server.injectThen('/trust/publish/1BV3l')
        .then(response => {
          const actual = response.statusCode;
          const expected = 301;

          assert.equal(actual, expected);
          done();
        });
    });
  });

  context('for a draft petition', done => {
    it('responds with 200', done => {
      moxios.stubRequest(/.*/, {
        status: 200,
        response: mockPetition
      });

      server.injectThen('/trust/publish/1BV3l')
        .then(response => {
          const actual = response.statusCode;
          const expected = 200;

          assert.equal(actual, expected);
          done();
        });
    });
  });
});

describe('GET /trust/publish/:id/confirm', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  context('for a supportable petition', done => {
    it('responds with 301', done => {
      moxios.stubRequest(/.*/, {
        status: 200,
        response: mockPetitionSupportable
      });

      server.injectThen('/trust/publish/1BV3l/confirm')
        .then(response => {
          const actual = response.statusCode;
          const expected = 301;

          assert.equal(actual, expected);
          done();
        });
    });
  });

  context('for a draft petition', done => {
    it('responds with 200', done => {
      moxios.stubRequest(/.*/, {
        status: 200,
        response: mockPetition
      });

      server.injectThen('/trust/publish/1BV3l/confirm')
        .then(response => {
          const actual = response.statusCode;
          const expected = 200;

          assert.equal(actual, expected);
          done();
        });
    });
  });
});

describe('GET /trust/support/:id', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  context('for an unsupportable petition', done => {
    it('responds with 301', done => {
      moxios.stubRequest(/.*/, {
        status: 200,
        response: mockPetitionProcessing
      });

      server.injectThen('/trust/support/1BV3l')
        .then(response => {
          const actual = response.statusCode;
          const expected = 301;

          assert.equal(actual, expected);
          done();
        });
    });
  });

  context('for a supportable petition', done => {
    it('responds with 200', done => {
      moxios.stubRequest(/.*/, {
        status: 200,
        response: mockPetitionSupportable
      });

      server.injectThen('/trust/support/1BV3l')
        .then(response => {
          const actual = response.statusCode;
          const expected = 200;

          assert.equal(actual, expected);
          done();
        });
    });
  });
});

describe('GET /trust/support/:id/confirm', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  context('for an unsupportable petition', done => {
    it('responds with 301', done => {
      moxios.stubRequest(/.*/, {
        status: 200,
        response: mockPetitionProcessing
      });

      server.injectThen('/trust/support/1BV3l/confirm')
        .then(response => {
          const actual = response.statusCode;
          const expected = 301;

          assert.equal(actual, expected);
          done();
        });
    });
  });

  context('for a supportable petition', done => {
    it('responds with 200', done => {
      moxios.stubRequest(/.*/, {
        status: 200,
        response: mockPetitionSupportable
      });

      server.injectThen('/trust/support/1BV3l/confirm')
        .then(response => {
          const actual = response.statusCode;
          const expected = 200;

          assert.equal(actual, expected);
          done();
        });
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

describe('GET /respond/123456', () => {
  it('responds with 200', done => {
    server.injectThen('/respond/123456')
      .then(response => {
        const actual = response.statusCode;
        const expected = 200;

        assert.equal(actual, expected);
        done();
      });
  });
});

describe('GET /confirm/email/supporter', () => {
  context('with a valid key', done => {
    beforeEach(() => {
      moxios.install();
    });

    afterEach(() => {
      moxios.uninstall();
    });

    it('responds with 200', done => {
      moxios.stubRequest(/.*/, {
        status: 200,
        response: { data: '' }
      });

      server.injectThen('/confirm/email/supporter?key=xxx')
        .then(response => {
          const actual = response.statusCode;
          const expected = 200;

          assert.equal(actual, expected);
          done();
        });
    });
  });

  context('with an invalid key', done => {
    it('responds with 500', done => {
      server.injectThen('/confirm/email/supporter?key=xxx')
        .then(response => {
          const actual = response.statusCode;
          const expected = 500;

          assert.equal(actual, expected);
          done();
        });
    });
  });

  context('without a key', done => {
    it('responds with 200', done => {
      server.injectThen('/confirm/email/supporter')
        .then(response => {
          const actual = response.statusCode;
          const expected = 500;

          assert.equal(actual, expected);
          done();
        });
    });
  });
});

describe('GET /confirm/email/petition', () => {
  context('with a valid key', done => {
    beforeEach(() => {
      moxios.install();
    });

    afterEach(() => {
      moxios.uninstall();
    });

    it('responds with 200', done => {
      moxios.stubRequest(/.*/, {
        status: 200,
        response: { data: '' }
      });

      server.injectThen('/confirm/email/petition?key=xxx')
        .then(response => {
          const actual = response.statusCode;
          const expected = 200;

          assert.equal(actual, expected);
          done();
        });
    });
  });

  context('with an invalid key', done => {
    it('responds with 500', done => {
      server.injectThen('/confirm/email/petition')
        .then(response => {
          const actual = response.statusCode;
          const expected = 500;

          assert.equal(actual, expected);
          done();
        });
    });
  });

  context('without a key', done => {
    it('responds with 500', done => {
      server.injectThen('/confirm/email/petition')
        .then(response => {
          const actual = response.statusCode;
          const expected = 500;

          assert.equal(actual, expected);
          done();
        });
    });
  });
});

describe('GET /confirm/email/invalid', () => {
  it('responds with 404', done => {
    server.injectThen('/confirm/email/invalid')
      .then(response => {
        const actual = response.statusCode;
        const expected = 404;

        assert.equal(actual, expected);
        done();
      });
  });
});
