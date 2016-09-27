import { assert } from 'chai';
import sinon from 'sinon';
import ApiClient from 'services/api/client';
import openGraphRepository from 'services/api/repositories/openGraph';

describe('Open Graph repository', () => {
  let exampleUrl = 'http://www.example.com/article.html';

  beforeEach(() => {
    sinon.stub(ApiClient, 'request');
  });

  afterEach(() => {
    ApiClient.request.restore();
  });

  describe('check', () => {
    it('calls the API client with default offset and limit', () => {
      let expectedPathArgument = '/og/check';
      let expectedDataArgument = { url: exampleUrl };
      let expectedMethodArgument = 'POST';

      openGraphRepository.check(exampleUrl);

      assert(ApiClient.request.calledWith(
        expectedPathArgument,
        expectedDataArgument,
        expectedMethodArgument
      ));
    });
  });
});
