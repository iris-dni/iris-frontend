import moxios from 'moxios';
import chai from 'chai';
import petitionRepository from 'services/api/repositories/petition';
import mockPetitions from './../../../mocks/petitions';

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
});
