import { assert } from 'chai';
import sinon from 'sinon';
import moxios from 'moxios';
import mockPetition from '../mocks/petition';

import {
  requestPetition,
  receivePetition
} from 'actions/PetitionActions';

import {
  fetchPetitionByResponseToken
} from 'actions/RespondActions';

describe('RespondActions', () => {
  describe('fetchPetitionByResponseToken', () => {
    let exampleResponseToken = '1C9LQ';
    let dispatch;
    let result;

    beforeEach(() => {
      dispatch = sinon.spy();

      moxios.install();
      moxios.stubRequest(/.*/, {
        status: 200,
        response: { data: mockPetition }
      });

      result = fetchPetitionByResponseToken(exampleResponseToken);
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
});
