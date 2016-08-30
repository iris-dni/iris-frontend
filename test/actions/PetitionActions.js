import { assert } from 'chai';
import sinon from 'sinon';
import moxios from 'moxios';
import mockPetition from '../mocks/petition';
import mockPetitions from '../mocks/petitions';

import {
  fetchPetition,
  requestPetition,
  receivePetition,
  fetchPetitions,
  requestPetitions,
  receivePetitions,
  submitPetition,
  createPetition,
  createdPetition,
  updatePetition,
  updatedPetition,
  publishPetition,
  publishedPetition,
  supportPetition
} from 'actions/PetitionActions';

describe('PetitionActions', () => {
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

  describe('submitPetition', () => {
    it('returns SUBMIT_PETITION action', () => {
      const result = submitPetition();
      const actual = result.type;
      const expected = 'SUBMIT_PETITION';

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
        response: mockPetition
      });

      result = createPetition(mockPetition.data, dispatch);
    });

    afterEach(() => {
      moxios.uninstall();
    });

    it('dispatches submitPetition()', () => {
      assert(dispatch.calledWith(submitPetition()));
    });

    it('returns a promise that dispatches createdPetition() when done', done => {
      result.then(() => {
        assert(dispatch.calledWithMatch(createdPetition(mockPetition.data)));
      }).then(done, done);
    });
  });

  describe('createdPetition', () => {
    it('returns CREATED_PETITION action', () => {
      const result = createdPetition();
      const actual = result.type;
      const expected = 'CREATED_PETITION';

      assert.equal(actual, expected);
    });

    it('passes petition object', () => {
      const result = createdPetition(mockPetition);
      const actual = result.petition;
      const expected = mockPetition;

      assert.equal(actual, expected);
    });
  });

  describe('updatePetition', () => {
    let dispatch;
    let result;
    let petition;

    beforeEach(() => {
      dispatch = sinon.spy();

      moxios.install();
      moxios.stubRequest(/.*/, {
        status: 200,
        response: mockPetition
      });

      petition = { id: 2, ...mockPetition.data };

      result = updatePetition(petition, dispatch);
    });

    afterEach(() => {
      moxios.uninstall();
    });

    it('dispatches submitPetition()', () => {
      assert(dispatch.calledWith(submitPetition()));
    });

    it('returns a promise that dispatches updatedPetition() when done', done => {
      result.then(() => {
        assert(dispatch.calledWithMatch(updatedPetition(mockPetition.data)));
      }).then(done, done);
    });
  });

  describe('updatedPetition', () => {
    it('returns UPDATED_PETITION action', () => {
      const result = updatedPetition();
      const actual = result.type;
      const expected = 'UPDATED_PETITION';

      assert.equal(actual, expected);
    });

    it('passes petition object', () => {
      const result = updatedPetition(mockPetition);
      const actual = result.petition;
      const expected = mockPetition;

      assert.equal(actual, expected);
    });
  });

  describe('publishPetition', () => {
    let dispatch;
    let result;
    let petition;

    beforeEach(() => {
      dispatch = sinon.spy();

      moxios.install();
      moxios.stubRequest(/.*/, {
        status: 200,
        response: mockPetition
      });

      petition = { id: 2, ...mockPetition.data };

      result = publishPetition(petition, dispatch);
    });

    afterEach(() => {
      moxios.uninstall();
    });

    it('dispatches submitPetition()', () => {
      result(dispatch);
      assert(dispatch.calledWith(submitPetition()));
    });

    it('returns function that returns a promise that dispatches publishedPetition() when done', done => {
      result(dispatch).then(() => {
        assert(dispatch.calledWithMatch(publishedPetition(mockPetition.data)));
      }).then(done, done);
    });
  });

  describe('publishedPetition', () => {
    it('returns PUBLISHED_PETITION action', () => {
      const result = publishedPetition();
      const actual = result.type;
      const expected = 'PUBLISHED_PETITION';

      assert.equal(actual, expected);
    });

    it('passes petition object', () => {
      const result = publishedPetition(mockPetition);
      const actual = result.petition;
      const expected = mockPetition;

      assert.equal(actual, expected);
    });
  });

  describe('supportPetition', () => {
    let dispatch;
    let result;
    let petition;

    beforeEach(() => {
      dispatch = sinon.spy();

      moxios.install();
      moxios.stubRequest(/.*/, {
        status: 200,
        response: mockPetition
      });

      petition = { id: 2, ...mockPetition.data };

      result = supportPetition(petition, dispatch);
    });

    afterEach(() => {
      moxios.uninstall();
    });

    it('dispatches submitPetition()', () => {
      result(dispatch);
      assert(dispatch.calledWith(submitPetition()));
    });

    it('returns function that returns a promise that dispatches receivePetition() when done', done => {
      result(dispatch).then(() => {
        assert(dispatch.calledWithMatch(receivePetition(mockPetition.data)));
      }).then(done, done);
    });
  });
});
