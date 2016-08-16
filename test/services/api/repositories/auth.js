import { assert } from 'chai';
import sinon from 'sinon';
import ApiClient from 'services/api/client';
import authRepository from 'services/api/repositories/auth';

describe('auth repository', () => {
  beforeEach(() => {
    sinon.stub(ApiClient, 'request');
  });

  afterEach(() => {
    ApiClient.request.restore();
  });

  describe('whoAmI', () => {
    let expectedPath = '/auth/whoami';

    it('calls the API and returns data', () => {
      authRepository.whoAmI();
      assert(ApiClient.request.calledWith(expectedPath));
    });
  });
});
