import moxios from 'moxios';
import { assert } from 'chai';
import authRepository from 'services/api/repositories/auth';
import mockWhoAmI from './../../../mocks/whoAmI';

describe('auth repository', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  describe('whoAmI', () => {
    it('calls the API and returns data', (done) => {
      let expectedPath = /\/auth\/whoami$/;
      let expectedResponse = mockWhoAmI;

      moxios.stubRequest(expectedPath, {
        status: 200,
        response: mockWhoAmI
      });

      authRepository.whoAmI().then((actualResponse) => {
        assert.deepEqual(actualResponse, expectedResponse);
        done();
      });
    });
  });
});
