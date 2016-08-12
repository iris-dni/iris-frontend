import moxios from 'moxios';
import chai from 'chai';
import petitionRepository from 'services/api/repositories/petition';
import mockPetitions from './../../../mocks/petitions';
import mockPetition from './../../../mocks/petition';

const { assert } = chai;

describe('petition repository', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  describe('all', () => {
    it('calls the API without params', (done) => {
      let expectedPath = /\/petitions\?offset=0&limit=12$/;
      let expectedResponse = mockPetitions;

      moxios.stubRequest(expectedPath, {
        status: 200,
        response: mockPetitions
      });

      petitionRepository.all().then((actualResponse) => {
        assert.deepEqual(actualResponse, expectedResponse);
        done();
      });
    });

    it('calls the API with pagination params', (done) => {
      let expectedPath = /\/petitions\?offset=10&limit=10$/;
      let expectedResponse = mockPetitions;

      moxios.stubRequest(expectedPath, {
        status: 200,
        response: mockPetitions
      });

      petitionRepository.all({ page: 2, limit: 10 }).then((actualResponse) => {
        assert.deepEqual(actualResponse, expectedResponse);
        done();
      });
    });
  });

  describe('find', () => {
    it('calls the API and returns the requested petition', (done) => {
      let expectedPath = /\/petitions\/777$/;
      let expectedResponse = mockPetition;

      moxios.stubRequest(expectedPath, {
        status: 200,
        response: mockPetition
      });

      petitionRepository.find(777).then(actualResponse => {
        assert.deepEqual(actualResponse, expectedResponse);
        done();
      });
    });
  });
});
