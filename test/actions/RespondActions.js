import { assert } from 'chai';
import { push } from 'react-router-redux';
import sinon from 'sinon';
import moxios from 'moxios';
import mockPetition from '../mocks/petition';

import {
  requestPetition,
  receivePetition,
  submittingPetition,
  petitionNotFound
} from 'actions/PetitionActions';

import {
  fetchPetitionByResponseToken,
  respondToPetition,
  respondedToPetition
} from 'actions/RespondActions';

describe('RespondActions', () => {
  let dispatch;
  let result;
  let exampleResponseToken = '1C9LQ';
  let examplePetition = mockPetition.data;

  beforeEach(() => {
    dispatch = sinon.spy();

    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  describe('fetchPetitionByResponseToken', () => {
    context('with an existing token', () => {
      beforeEach(() => {
        moxios.stubRequest(/.*/, {
          status: 200,
          response: { data: mockPetition }
        });

        result = fetchPetitionByResponseToken(exampleResponseToken);
      });

      it('returns a function that dispatches requestPetition()', () => {
        result(dispatch);
        assert(dispatch.calledWith(requestPetition()));
      });

      it('returns a function that returns a promise that adds the token to the response and dispatches receivePetition()', done => {
        result(dispatch).then(() => {
          assert(dispatch.calledWith(receivePetition({
            ...mockPetition,
            token: exampleResponseToken
          })));
        }).then(done, done);
      });
    });

    context('with a non existing token', () => {
      beforeEach(() => {
        moxios.stubRequest(/.*/, {
          status: 404,
          response: { data: null }
        });

        result = fetchPetitionByResponseToken(exampleResponseToken);
      });

      it('returns a function that dispatches requestPetition()', () => {
        result(dispatch);
        assert(dispatch.calledWith(requestPetition()));
      });

      it('returns a function that returns a promise that adds the token to the response and dispatches petitionNotFound()', done => {
        result(dispatch).then(() => {
          assert(dispatch.calledWith(petitionNotFound({
            token: exampleResponseToken
          })));
        }).then(done, done);
      });
    });
  });

  describe('respondToPetition', () => {
    let dispatch;
    let result;

    let exampleResponse = {
      answer: {
        text: 'Example answer',
        name: 'Jane Doe, Mayor'
      },
      petitionId: examplePetition.id,
      token: exampleResponseToken
    };

    let examplePetitionWithResponse = {
      ...examplePetition,
      city_answer: exampleResponse.answer
    };

    beforeEach(() => {
      dispatch = sinon.spy();

      moxios.stubRequest(/.*/, {
        status: 200,
        response: { data: examplePetitionWithResponse }
      });

      result = respondToPetition(exampleResponse, dispatch);
    });

    it('dispatches submittingPetition()', done => {
      result.then(() => {
        assert(dispatch.calledWith(submittingPetition()));
      }).then(done, done);
    });

    it('dispatches push to success page', done => {
      result.then(() => {
        assert(dispatch.calledWith(push(`/respond/${exampleResponseToken}/confirmation`)));
      }).then(done, done);
    });

    it('returns a promise that dispatches respondedToPetition() when done', done => {
      result.then(() => {
        assert(dispatch.calledWithMatch(respondedToPetition(examplePetitionWithResponse)));
      }).then(done, done);
    });
  });

  describe('respondedToPetition', () => {
    it('returns RESPONDED_TO_PETITION action', () => {
      const result = respondedToPetition(examplePetition);
      const actual = result.type;
      const expected = 'RESPONDED_TO_PETITION';

      assert.equal(actual, expected);
    });

    it('passes petition object', () => {
      const result = respondedToPetition(examplePetition);
      const actual = result.petition;
      const expected = examplePetition;

      assert.deepEqual(actual, expected);
    });
  });
});
