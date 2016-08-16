import { assert } from 'chai';
import sinon from 'sinon';
import ApiClient from 'services/api/client';
import petitionRepository from 'services/api/repositories/petition';
import mockNewPetition from './../../../mocks/newPetition';
import mockExistingPetition from './../../../mocks/existingPetition';

describe('petition repository', () => {
  beforeEach(() => {
    sinon.stub(ApiClient, 'request');
  });

  afterEach(() => {
    ApiClient.request.restore();
  });

  describe('all', () => {
    let expectedPath = '/petitions';

    it('calls the API without params', () => {
      let expectedParams = { offset: 0, limit: 12 };

      petitionRepository.all();
      assert(ApiClient.request.calledWith(expectedPath, expectedParams));
    });

    it('calls the API with pagination params', () => {
      let expectedParams = { offset: 10, limit: 10 };

      petitionRepository.all({ page: 2, limit: 10 });
      assert(ApiClient.request.calledWith(expectedPath, expectedParams));
    });
  });

  describe('find', () => {
    let expectedPath = '/petitions/777';

    it('calls the API and returns the requested petition', () => {
      petitionRepository.find(777);
      assert(ApiClient.request.calledWith(expectedPath));
    });
  });

  describe('create', () => {
    let expectedPath = '/petitions';
    let expectedMethod = 'POST';

    it('calls the API and returns the newly created petition', () => {
      petitionRepository.create(mockNewPetition);
      assert(ApiClient.request.calledWith(expectedPath, mockNewPetition, expectedMethod));
    });
  });

  describe('update', () => {
    let expectedPath = '/petitions/777';
    let expectedMethod = 'POST';

    it('calls the API and returns the updated petition', () => {
      petitionRepository.update(mockExistingPetition);
      assert(ApiClient.request.calledWith(expectedPath, mockNewPetition, expectedMethod));
    });
  });
});
