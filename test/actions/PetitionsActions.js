import { assert } from 'chai';
import sinon from 'sinon';
import moxios from 'moxios';
import mockPetitions from '../mocks/petitions';

import {
  fetchPetitions,
  requestPetitions,
  receivePetitions
} from 'actions/PetitionsActions';

describe('PetitionsActions', () => {
  describe('fetchPetitions', () => {
    let dispatch;
    let result;

    beforeEach(() => {
      dispatch = sinon.spy();

      moxios.install();
      moxios.stubRequest(/.*/, {
        status: 200,
        response: { data: mockPetitions }
      });

      result = fetchPetitions({ location: { query: {} } });
    });

    afterEach(() => {
      moxios.uninstall();
    });

    it('returns a function that dispatches requestPetitions()', () => {
      result(dispatch);
      assert(dispatch.calledWith(requestPetitions()));
    });

    it('returns a function that returns a promise that dispatches receivePetitions()', done => {
      result(dispatch).then(() => {
        assert(dispatch.calledWithMatch(receivePetitions({data: mockPetitions})));
      }).then(done, done);
    });
  });

  describe('requestPetitions', () => {
    it('returns REQUEST_PETITIONS action', () => {
      const result = requestPetitions();
      const actual = result.type;
      const expected = 'REQUEST_PETITIONS';

      assert.equal(actual, expected);
    });
  });

  describe('receivePetitions', () => {
    it('returns RECEIVE_PETITIONS action', () => {
      const result = receivePetitions();
      const actual = result.type;
      const expected = 'RECEIVE_PETITIONS';

      assert.equal(actual, expected);
    });

    it('passes petitions object', () => {
      const result = receivePetitions(mockPetitions);
      const actual = result.petitions;
      const expected = mockPetitions;

      assert.deepEqual(actual, expected);
    });
  });
});
