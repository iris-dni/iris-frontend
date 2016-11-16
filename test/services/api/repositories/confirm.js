import { assert } from 'chai';
import sinon from 'sinon';
import ApiClient from 'services/api/client';
import confirmRepository from 'services/api/repositories/confirm';

describe('confirm repository', () => {
  const exampleId = 'abc1234';

  beforeEach(() => {
    sinon.stub(ApiClient, 'request');
  });

  afterEach(() => {
    ApiClient.request.restore();
  });

  describe('validate', () => {
    const expectedPathArgument = `/confirmations/${exampleId}/confirm`;
    const expectedDataArgument = { token: exampleId };
    const expectedMethodArgument = 'GET';
    const expectedHeadersArgument = { 'x-iris-api-key': process.env.API_KEY };

    it('calls the API client with the proper arguments', () => {
      confirmRepository.validate(exampleId);

      assert(ApiClient.request.calledWith(
        expectedPathArgument,
        expectedDataArgument,
        expectedMethodArgument,
        expectedHeadersArgument
      ));
    });
  });
});
