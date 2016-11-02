import { assert } from 'chai';
import sinon from 'sinon';
import ApiClient from 'services/api/client';
import mentionRepository from 'services/api/repositories/mention';

describe('mention repository', () => {
  const exampleId = '7UV7m';
  const exampleUrl = 'http://example.com/article-mentioning-petition';

  beforeEach(() => {
    sinon.stub(ApiClient, 'request');
  });

  afterEach(() => {
    ApiClient.request.restore();
  });

  describe('track', () => {
    const expectedPathArgument = `/petitions/${exampleId}/mentions`;
    const expectedDataArgument = { url: exampleUrl };
    const expectedMethodArgument = 'GET';
    const expectedHeadersArgument = { 'X-IRIS-APIKEY': process.env.API_KEY };

    it('calls the API client with the proper arguments', () => {
      mentionRepository.track(exampleId, exampleUrl);

      assert(ApiClient.request.calledWith(
        expectedPathArgument,
        expectedDataArgument,
        expectedMethodArgument,
        expectedHeadersArgument
      ));
    });
  });
});
