import { assert } from 'chai';
import sinon from 'sinon';
import moxios from 'moxios';
import mockPetition from '../mocks/petition';
import mockUser from '../mocks/user';
import mockTrustResponse from '../mocks/trustResponse';
import mockTrustResponseUntrusted from '../mocks/trustResponseUntrusted';
import mockTrustResponseInvalid from '../mocks/trustResponseInvalid';

import {
  fetchPetition,
  refreshPetition,
  requestPetition,
  clearPetition,
  receivePetition,
  submittingPetition,
  createPetition,
  createdPetition,
  updatePetition,
  updatedPetition,
  publishPetition,
  publishedPetition,
  petitionNotFound
} from 'actions/PetitionActions';

import {
  userIsTrusted,
  userIsUntrusted,
  submittingTrust,
  finishedTrust
} from 'actions/TrustActions';

import {
  receiveWhoAmI
} from 'actions/AuthActions';

import {
  showFlashMessage
} from 'actions/FlashActions';

describe('PetitionActions', () => {
  describe('clearPetition', () => {
    it('returns CLEAR_PETITION action', () => {
      const result = clearPetition();
      const actual = result.type;
      const expected = 'CLEAR_PETITION';

      assert.equal(actual, expected);
    });

    it('passes null as petition object', () => {
      const result = clearPetition();
      const actual = result.petition;
      const expected = null;

      assert.equal(actual, expected);
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

  describe('refreshPetition', () => {
    let dispatch;
    let result;

    beforeEach(() => {
      dispatch = sinon.spy();

      moxios.install();
      moxios.stubRequest(/.*/, {
        status: 200,
        response: { data: mockPetition }
      });

      result = refreshPetition(mockPetition.data.id);
    });

    afterEach(() => {
      moxios.uninstall();
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
      const result = receivePetition(mockPetition);
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

  describe('submittingPetition', () => {
    it('returns SUBMITTING_PETITION action', () => {
      const result = submittingPetition();
      const actual = result.type;
      const expected = 'SUBMITTING_PETITION';

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

    it('dispatches submittingPetition()', () => {
      assert(dispatch.calledWith(submittingPetition()));
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

      assert.deepEqual(actual, expected);
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

      petition = {
        petition: mockPetition.data,
        owner: mockUser
      };

      result = updatePetition(petition, dispatch);
    });

    afterEach(() => {
      moxios.uninstall();
    });

    it('dispatches submittingPetition()', () => {
      assert(dispatch.calledWith(submittingPetition()));
    });

    it('dispatches receiveWhoAmI() with user', () => {
      assert(dispatch.calledWith(receiveWhoAmI(mockUser)));
    });

    it('returns a promise that dispatches updatedPetition() when done', done => {
      result.then(() => {
        assert(dispatch.calledWithMatch(updatedPetition({...mockPetition.data, owner: mockUser})));
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

      assert.deepEqual(actual, expected);
    });
  });

  describe('publishPetition', () => {
    context('with a petition', () => {
      let dispatch;
      let result;

      const mockTrustData = {
        petition: mockPetition.data
      };

      beforeEach(() => {
        dispatch = sinon.spy();
        result = publishPetition(mockTrustData);
      });

      it('dispatches submittingTrust() with petition id', done => {
        result(dispatch).then(() => {
          assert(dispatch.calledWith(submittingTrust(mockTrustData.petition.id)));
        }).then(done, done);
      });
    });

    context('with a successful response', () => {
      let dispatch;
      let result;

      const mockTrustData = {
        petition: mockPetition.data
      };

      beforeEach(() => {
        dispatch = sinon.spy();

        moxios.install();
        moxios.stubRequest(/.*/, {
          status: 200,
          response: mockTrustResponse
        });

        result = publishPetition(mockTrustData);
      });

      afterEach(() => {
        moxios.uninstall();
      });

      it('dispatches userIsTrusted()', done => {
        result(dispatch).then(() => {
          assert(dispatch.calledWith(userIsTrusted()));
        }).then(done, done);
      });

      it('dispatches supportedPetition()', done => {
        result(dispatch).then(() => {
          assert(dispatch.calledWith(publishedPetition(mockTrustResponse.data)));
        }).then(done, done);
      });

      it('dispatches finishedTrust()', done => {
        result(dispatch).then(() => {
          assert(dispatch.calledWith(finishedTrust()));
        }).then(done, done);
      });
    });

    context('with an untrusted user response', () => {
      let dispatch;
      let result;

      const mockTrustData = {
        petition: mockPetition.data
      };

      beforeEach(() => {
        dispatch = sinon.spy();

        moxios.install();
        moxios.stubRequest(/.*/, {
          status: 200,
          response: mockTrustResponseUntrusted
        });

        result = publishPetition(mockTrustData);
      });

      afterEach(() => {
        moxios.uninstall();
      });

      it('dispatches userIsUntrusted()', done => {
        result(dispatch).then(() => {
          assert(dispatch.calledWith(userIsUntrusted()));
        }).then(done, done);
      });

      it('dispatches finishedTrust()', done => {
        result(dispatch).then(() => {
          assert(dispatch.calledWith(finishedTrust()));
        }).then(done, done);
      });
    });

    context('with an invalid verification response', () => {
      let dispatch;
      let result;

      const mockTrustData = {
        petition: mockPetition.data
      };

      beforeEach(() => {
        dispatch = sinon.spy();

        moxios.install();
        moxios.stubRequest(/.*/, {
          status: 200,
          response: mockTrustResponseInvalid
        });

        result = publishPetition(mockTrustData);
      });

      afterEach(() => {
        moxios.uninstall();
      });

      it('dispatches showFlashMessage() error', done => {
        result(dispatch).then(() => {
          assert(dispatch.calledWith(showFlashMessage('Invalid verification code', 'error')));
        }).then(done, done);
      });

      it('dispatches finishedTrust()', done => {
        result(dispatch).then(() => {
          assert(dispatch.calledWith(finishedTrust()));
        }).then(done, done);
      });
    });

    context('with a random error', () => {
      let dispatch;
      let result;

      const mockTrustData = {
        petition: mockPetition.data
      };

      beforeEach(() => {
        dispatch = sinon.spy();

        moxios.install();
        moxios.stubRequest(/.*/, {
          status: 200,
          response: {
            status: 'error',
            reasons: ['random_error']
          }
        });

        result = publishPetition(mockTrustData);
      });

      afterEach(() => {
        moxios.uninstall();
      });

      it('dispatches showFlashMessage() error', done => {
        result(dispatch).then(() => {
          assert(dispatch.calledWith(showFlashMessage('Sadly something failed, please try again!', 'error')));
        }).then(done, done);
      });

      it('dispatches finishedTrust()', done => {
        result(dispatch).then(() => {
          assert(dispatch.calledWith(finishedTrust()));
        }).then(done, done);
      });
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

  describe('petitionNotFound', () => {
    it('returns PETITION_NOT_FOUND action', () => {
      const result = petitionNotFound();
      const actual = result.type;
      const expected = 'PETITION_NOT_FOUND';

      assert.equal(actual, expected);
    });

    context('without a petition stub', () => {
      it('passes an empty petition object', () => {
        const result = petitionNotFound();
        const actual = result.petition;
        const expected = {};

        assert.deepEqual(actual, expected);
      });
    });

    context('with a petition stub', () => {
      it('passes an empty petition object', () => {
        const petitionStub = { token: 'exampleToken' };
        const result = petitionNotFound(petitionStub);
        const actual = result.petition;
        const expected = petitionStub;

        assert.deepEqual(actual, expected);
      });
    });
  });
});
