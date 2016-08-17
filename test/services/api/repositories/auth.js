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
    it('calls the API client with proper arguments', () => {
      let expectedPathArgument = '/auth/whoami';

      authRepository.whoAmI();

      assert(ApiClient.request.calledWith(
        expectedPathArgument
      ));
    });
  });

  describe('logout', () => {
    it('calls the API client with proper arguments', () => {
      let expectedPathArgument = '/auth/logout';
      let expectedMethodArgument = 'POST';

      authRepository.logout();

      assert(ApiClient.request.calledWith(
        expectedPathArgument,
        null,
        expectedMethodArgument
      ));
    });
  });
});
