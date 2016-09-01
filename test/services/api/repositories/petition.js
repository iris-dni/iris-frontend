import { assert } from 'chai';
import sinon from 'sinon';
import ApiClient from 'services/api/client';
import petitionRepository from 'services/api/repositories/petition';

describe('petition repository', () => {
  let exampleId = 777;
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
        let expectedDataArgument = { offset: 0, limit: 12, resolve: 'city,owner' };

        petitionRepository.all();

        assert(ApiClient.request.calledWith(
          expectedPathArgument,
          expectedDataArgument
        ));
      });
    });

    context('with custom pagination argument', () => {
      it('calls the API client with proper offset and limit', () => {
        let expectedDataArgument = { offset: 10, limit: 10, resolve: 'city,owner' };

        petitionRepository.all({ page: 2, limit: 10 });

        assert(ApiClient.request.calledWith(
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

    it('resolves owner and city', () => {
      let expectedDataArgument = { resolve: 'city,owner' };

      petitionRepository.find(exampleId);

      assert(ApiClient.request.calledWith(
        expectedPathArgument,
        expectedDataArgument
      ));
    });
  });

  describe('create', () => {
    let examplePetition = { id: exampleId, title: exampleTitle };
    let expectedPathArgument = '/petitions';

    it('calls the API client with proper arguments', () => {
      let expectedPetitionArgument = { id: exampleId, title: exampleTitle };
      let expectedMethodArgument = 'POST';

      petitionRepository.create(examplePetition);

      assert(ApiClient.request.calledWith(
        expectedPathArgument,
        expectedPetitionArgument,
        expectedMethodArgument
      ));
    });
  });

  describe('update', () => {
    let examplePetition = { id: exampleId, title: exampleTitle };
    let expectedPathArgument = `/petitions/${exampleId}`;

    it('calls the API client with proper arguments', () => {
      let expectedPetitionArgument = { title: exampleTitle };
      let expectedMethodArgument = 'POST';

      petitionRepository.update(examplePetition);

      assert(ApiClient.request.calledWith(
        expectedPathArgument,
        expectedPetitionArgument,
        expectedMethodArgument
      ));
    });
  });

  describe('publish', () => {
    let examplePetition = { id: exampleId, title: exampleTitle };
    let expectedPathArgument = `/petitions/${exampleId}/event/publish`;

    it('calls the API client with proper arguments', () => {
      let expectedMethodArgument = 'POST';

      petitionRepository.publish(examplePetition);

      assert(ApiClient.request.calledWith(
        expectedPathArgument,
        null,
        expectedMethodArgument
      ));
    });
  });
});
