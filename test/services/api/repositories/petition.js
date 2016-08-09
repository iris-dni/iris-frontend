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
    beforeEach(() => {
      moxios.stubRequest(/.*/, {
        status: 200,
        response: mockPetitions
      });
    });

    it('calls the API without params', (done) => {
      const expectedPath = /\/petitions\?offset=0&limit=5$/;

      petitionRepository.all()
        .then((response) => {
          const actualPath = response.request.url;

          assert.match(actualPath, expectedPath);
          done();
        });
    });

    it('calls the API with pagination params', (done) => {
      const expectedPath = /\/petitions\?offset=10&limit=10$/;

      petitionRepository.all({ page: 2, per: 10 })
        .then((response) => {
          const actualPath = response.request.url;

          assert.match(actualPath, expectedPath);
          done();
        });
    });
  });
});
