import moxios from 'moxios';
import chai from 'chai';
import authRepository from 'services/api/repositories/auth';
import mockWhoAmI from './../../../mocks/whoAmI';

const { assert } = chai;

describe('auth repository', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  describe('whoAmI', () => {
    beforeEach(() => {
      moxios.stubRequest(/\/auth\/whoami$/, {
        status: 200,
        response: mockWhoAmI
      });
    });

    it('calls the API and returns data', (done) => {
      const expectedResponse = mockWhoAmI;

      authRepository.whoAmI().then((actualResponse) => {
        assert.deepEqual(actualResponse, expectedResponse);
        done();
      });
    });
  });
});
