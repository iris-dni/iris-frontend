import { assert } from 'chai';
import sinon from 'sinon';
import moment from 'moment';
import getPetitionResponseDaysPending from 'helpers/getPetitionResponseDaysPending';
import mockPetitionProcessing from '../mocks/petitionProcessing';
import mockPetition from '../mocks/petition';

describe('getPetitionResponseDaysPending', () => {
  context('with `letter_wait_expire` in state', () => {
    beforeEach(() => {
      const fakeTimeNow = moment('2016-11-04').valueOf();
      sinon.useFakeTimers(fakeTimeNow);
    });

    it('returns correctly', () => {
      const actual = getPetitionResponseDaysPending(mockPetitionProcessing.data);
      const expected = 12;

      assert.equal(actual, expected);
    });
  });

  context('without `letter_wait_expire` in state', () => {
    beforeEach(() => {
      const fakeTimeNow = moment('2016-11-25').valueOf();
      sinon.useFakeTimers(fakeTimeNow);
    });

    it('returns correctly', () => {
      const actual = getPetitionResponseDaysPending(mockPetition.data);
      const expected = 272;

      assert.equal(actual, expected);
    });
  });

  context('when expiry date is in the future', () => {
    beforeEach(() => {
      const fakeTimeNow = moment('2011-11-25').valueOf();
      sinon.useFakeTimers(fakeTimeNow);
    });

    it('returns 0', () => {
      const actual = getPetitionResponseDaysPending(mockPetition.data);
      const expected = 0;

      assert.equal(actual, expected);
    });
  });
});
