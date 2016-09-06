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

  describe('search', () => {
    let expectedPathArgument = '/cities';

    it('calls the API with search arguments', () => {
      let expectedDataArgument = { ft: 'term', limit: 10, sort: 'score' };

      cityRepository.search('term', 10);

      assert(ApiClient.request.calledWith(
        expectedPathArgument,
        expectedDataArgument
      ));
    });
  });
});
