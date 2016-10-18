import { assert } from 'chai';
import sinon from 'sinon';
import ApiClient from 'services/api/client';
import petitionRepository from 'services/api/repositories/petition';

describe('petition repository', () => {
  let exampleId = '7UV7m';
  let exampleResponseToken = '1C9LQ';
  let exampleTitle = 'Example Petition';

  beforeEach(() => {
    sinon.stub(ApiClient, 'request');
  });

  afterEach(() => {
    ApiClient.request.restore();
  });

  describe('all', () => {
    let expectedPathArgument = '/petitions';

    context('without any argument', () => {
      it('calls the API client with default offset and limit', () => {
        let expectedDataArgument = {
          offset: 0,
          limit: 12
        };
        petitionRepository.all();

        assert(ApiClient.request.calledWithMatch(
          expectedPathArgument,
          expectedDataArgument
        ));
      });
    });

    context('with custom pagination argument', () => {
      it('calls the API client with proper offset and limit', () => {
        let expectedDataArgument = {
          offset: 10,
          limit: 10
        };
        petitionRepository.all({ page: 2, limit: 10 });

        assert(ApiClient.request.calledWithMatch(
          expectedPathArgument,
          expectedDataArgument
        ));
      });
    });
  });

  describe('find', () => {
    let expectedPathArgument = `/petitions/${exampleId}`;

    it('calls the API and returns the requested petition', () => {
      petitionRepository.find(exampleId);

      assert(ApiClient.request.calledWith(
        expectedPathArgument
      ));
    });

    it('resolves owner, city, links and mentions', () => {
      let expectedDataArgument = { resolve: 'city,owner,links,mentions' };

      petitionRepository.find(exampleId);

      assert(ApiClient.request.calledWithMatch(
        expectedPathArgument,
        expectedDataArgument
      ));
    });
  });

  describe('findByResponseToken', () => {
    let expectedPathArgument = `/token/${exampleResponseToken}/petitions`;
    let expectedDataArgument = {
      resolve: 'city,owner'
    };

    it('calls the API client with proper arguments', () => {
      petitionRepository.findByResponseToken(exampleResponseToken);

      assert(ApiClient.request.calledWithMatch(
        expectedPathArgument,
        expectedDataArgument
      ));
    });
  });

  describe('create', () => {
    let examplePetition = { id: exampleId, title: exampleTitle };
    let expectedPathArgument = '/petitions';
    let expectedDataArgument = { data: { id: exampleId, title: exampleTitle } };
    let expectedMethodArgument = 'POST';

    it('calls the API client with proper arguments', () => {
      petitionRepository.create(examplePetition);

      assert(ApiClient.request.calledWith(
        expectedPathArgument,
        expectedDataArgument,
        expectedMethodArgument
      ));
    });
  });

  describe('update', () => {
    let examplePetition = { id: exampleId, title: exampleTitle };
    let expectedPathArgument = `/petitions/${exampleId}`;
    let expectedDataArgument = { data: { title: exampleTitle } };
    let expectedMethodArgument = 'POST';

    it('calls the API client with proper arguments', () => {
      petitionRepository.update(examplePetition);

      assert(ApiClient.request.calledWith(
        expectedPathArgument,
        expectedDataArgument,
        expectedMethodArgument
      ));
    });
  });

  describe('publish', () => {
    let examplePetition = { id: exampleId, title: exampleTitle };
    let expectedPathArgument = `/petitions/${exampleId}/event/publish`;
    let expectedDataArgument = null;
    let expectedMethodArgument = 'POST';

    it('calls the API client with proper arguments', () => {
      petitionRepository.publish(examplePetition);

      assert(ApiClient.request.calledWith(
        expectedPathArgument,
        expectedDataArgument,
        expectedMethodArgument
      ));
    });
  });

  describe('support', () => {
    let exampleTrustData = { petitionId: exampleId, user: {} };
    let expectedPathArgument = `/petitions/${exampleId}/event/support`;
    let expectedDataArgument = { data: exampleTrustData };
    let expectedMethodArgument = 'POST';

    it('calls the API client with proper arguments', () => {
      petitionRepository.support(exampleTrustData);

      assert(ApiClient.request.calledWith(
        expectedPathArgument,
        expectedDataArgument,
        expectedMethodArgument
      ));
    });
  });

  describe('respond', () => {
    let exampleResponse = {
      answer: {
        text: 'Example Answer',
        name: 'Jane Doe, Mayor'
      },
      petitionId: exampleId,
      token: exampleResponseToken
    };

    let expectedPathArgument = `/petitions/${exampleId}/event/setFeedback`;
    let expectedDataArgument = {
      data: {
        answer: exampleResponse.answer,
        token: exampleResponse.token
      }
    };
    let expectedMethodArgument = 'POST';

    it('calls the API client with proper arguments', () => {
      petitionRepository.respond(exampleResponse);

      assert(ApiClient.request.calledWithMatch(
        expectedPathArgument,
        expectedDataArgument,
        expectedMethodArgument
      ));
    });
  });
});
