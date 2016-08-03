import chai from 'chai';
import petitionRepository from 'services/api/repositories/petition';

const { assert } = chai;

describe('all', () => {
  it('calls the API without params', (done) => {
    const expectedPath = /\/petitions$/;

    petitionRepository.all()
      .then((response) => {
        const actualPath = response.request.path;

        assert.match(actualPath, expectedPath);
        done();
      });
  });

  it('calls the API with params', (done) => {
    const expectedPath = /\/petitions\?offset=2&limit=5$/;

    petitionRepository.all({ offset: 2, limit: 5 })
      .then((response) => {
        const actualPath = response.request.path;

        assert.match(actualPath, expectedPath);
        done();
      });
  });
});
