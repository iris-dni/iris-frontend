import { assert } from 'chai';
import sinon from 'sinon';
import moxios from 'moxios';
import mockPetition from '../mocks/petition';

import {
  requestPetition,
  receivePetition,
  submittingPetition,
  updatedPetition,
  petitionNotFound
} from 'actions/PetitionActions';

import {
  fetchPetitionByResponseToken,
  respondToPetition
} from 'actions/RespondActions';

describe('RespondActions', () => {
  let dispatch;
  let result;
  let exampleResponseToken = '1C9LQ';

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
    let examplePetition = mockPetition.data;
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
      moxios.stubRequest(/.*/, {
        status: 200,
        response: { data: examplePetitionWithResponse }
      });
    });

    it('dispatches submittingPetition()', done => {
      respondToPetition(exampleResponse, dispatch).then(() => {
        assert(dispatch.calledWith(submittingPetition()));
      }).then(done, done);
    });

    it('returns a promise that dispatches updatedPetition() when done', done => {
      respondToPetition(exampleResponse, dispatch).then(() => {
        assert(dispatch.calledWithMatch(updatedPetition(examplePetitionWithResponse)));
      }).then(done, done);
    });
  });
});
