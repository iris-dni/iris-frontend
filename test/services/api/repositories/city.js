import { assert } from 'chai';
import sinon from 'sinon';
import ApiClient from 'services/api/client';
import cityRepository from 'services/api/repositories/city';

describe('city repository', () => {
  beforeEach(() => {
    sinon.stub(ApiClient, 'request');
  });

  afterEach(() => {
    ApiClient.request.restore();
  });

  describe('all', () => {
    let expectedPathArgument = '/cities';

    it('calls the API without arguments', () => {
      cityRepository.all();

      assert(ApiClient.request.calledWith(
        expectedPathArgument
      ));
    });
  });
});
