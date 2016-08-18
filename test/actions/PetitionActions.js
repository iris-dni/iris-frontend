import { assert } from 'chai';
import sinon from 'sinon';
import moxios from 'moxios';
import mockPetition from '../mocks/petition';
import mockPetitions from '../mocks/petitions';

import {
  requestPetition,
  receivePetition,
  fetchPetition,
  requestPetitions,
  receivePetitions,
  fetchPetitions,
  submitPetition,
  createdPetition,
  createPetition
} from 'actions/PetitionActions';

describe('PetitionActions', () => {
  describe('requestPetition', () => {
    it('returns REQUEST_PETITION action', () => {
      const result = requestPetition();
      const actual = result.type;
      const expected = 'REQUEST_PETITION';

      assert.equal(actual, expected);
    });
  });

  describe('receivePetition', () => {
    it('returns RECEIVE_PETITION action', () => {
      const result = receivePetition();
      const actual = result.type;
      const expected = 'RECEIVE_PETITION';

      assert.equal(actual, expected);
    });

    it('passes petition object', () => {
      const result = receivePetition(mockPetition);
      const actual = result.petition;
      const expected = mockPetition;

      assert.deepEqual(actual, expected);
    });
  });

  describe('fetchPetition', () => {
    let dispatch;
    let result;

    beforeEach(() => {
      dispatch = sinon.spy();

      moxios.install();
      moxios.stubRequest(/.*/, {
        status: 200,
        response: { data: mockPetition }
      });

      result = fetchPetition(mockPetition.data.id);
    });

    afterEach(() => {
      moxios.uninstall();
    });

    it('returns a function that dispatches requestPetition()', () => {
      result(dispatch);
      assert(dispatch.calledWith(requestPetition()));
    });

    it('returns a function that returns a promise that dispatches receivePetition()', done => {
      result(dispatch).then(() => {
        assert(dispatch.calledWith(receivePetition(mockPetition)));
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

  describe('submitPetition', () => {
    it('returns SUBMIT_PETITION action', () => {
      const result = submitPetition();
      const actual = result.type;
      const expected = 'SUBMIT_PETITION';

      assert.equal(actual, expected);
    });
  });

  describe('createdPetition', () => {
    it('returns CREATED_PETITION action', () => {
      const result = createdPetition();
      const actual = result.type;
      const expected = 'CREATED_PETITION';

      assert.equal(actual, expected);
    });

    it('passes petition ID', () => {
      const result = createdPetition(23);
      const actual = result.id;
      const expected = 23;

      assert.equal(actual, expected);
    });
  });

  describe('createPetition', () => {
    let dispatch;
    let result;

    beforeEach(() => {
      dispatch = sinon.spy();

      moxios.install();
      moxios.stubRequest(/.*/, {
        status: 200,
        response: { data: mockPetition }
      });

      result = createPetition(mockPetition, dispatch);
    });

    afterEach(() => {
      moxios.uninstall();
    });

    it('dispatches submitPetition()', () => {
      assert(dispatch.calledWith(submitPetition()));
    });

    it('returns a promise that dispatches createdPetition() when done', done => {
      result.then(() => {
        assert(dispatch.calledWith(createdPetition(mockPetition.data.id)));
      }).then(done, done);
    });
  });
});
