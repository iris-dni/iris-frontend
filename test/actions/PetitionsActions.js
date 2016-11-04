import { assert } from 'chai';
import sinon from 'sinon';
import moxios from 'moxios';
import mockPetitions from '../mocks/petitions';

import {
  fetchPetitions,
  requestPetitions,
  receivePetitions,
  requestGroupedPetitions,
  receiveGroupedPetitions,
  clearPetitions
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
        assert(dispatch.calledWithMatch(receivePetitions({data: mockPetitions}, {}, {})));
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

  describe('requestGroupedPetitions', () => {
    it('returns REQUEST_GROUPED_PETITIONS action', () => {
      const result = requestGroupedPetitions();
      const actual = result.type;
      const expected = 'REQUEST_GROUPED_PETITIONS';

      assert.equal(actual, expected);
    });

    it('passes group name', () => {
      const result = requestGroupedPetitions('latest');
      const actual = result.group;
      const expected = 'latest';

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

    it('passes query params', () => {
      const result = receivePetitions(mockPetitions, { limit: 10 });
      const actual = result.params;
      const expected = { limit: 10 };

      assert.deepEqual(actual, expected);
    });

    it('passes the query string', () => {
      const result = receivePetitions(mockPetitions, {}, 'hello=world&page=3');
      const actual = result.qs;
      const expected = 'hello=world&page=3';

      assert.deepEqual(actual, expected);
    });
  });

  describe('receiveGroupedPetitions', () => {
    it('returns RECEIVE_GROUPED_PETITIONS action', () => {
      const result = receiveGroupedPetitions();
      const actual = result.type;
      const expected = 'RECEIVE_GROUPED_PETITIONS';

      assert.equal(actual, expected);
    });

    it('passes group name', () => {
      const result = receiveGroupedPetitions(mockPetitions, {}, 'latest');
      const actual = result.group;
      const expected = 'latest';

      assert.equal(actual, expected);
    });

    it('passes petitions', () => {
      const result = receiveGroupedPetitions(mockPetitions, {}, '');
      const actual = result.petitions;
      const expected = mockPetitions;

      assert.deepEqual(actual, expected);
    });

    it('passes query params', () => {
      const result = receivePetitions(mockPetitions, { limit: 10 });
      const actual = result.params;
      const expected = { limit: 10 };

      assert.deepEqual(actual, expected);
    });
  });

  describe('clearPetitions', () => {
    it('returns CLEAR_PETITIONS action', () => {
      const result = clearPetitions();
      const actual = result.type;
      const expected = 'CLEAR_PETITIONS';

      assert.equal(actual, expected);
    });
  });
});
