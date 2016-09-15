import { assert } from 'chai';
import moment from 'moment';
import getPetitionEndDate from 'helpers/getPetitionEndDate';

describe('getPetitionEndDate', () => {
  context('when no dates given', () => {
    it('returns the date <daysToVote> days in the future', () => {
      const actual = getPetitionEndDate({}).toString();
      const expected = moment().add(30, 'days').toString();

      assert.equal(actual, expected);
    });
  });

  context('when an expiry date is given', () => {
    it('returns the expiry date', () => {
      const expires = 'Thu Dec 01 2016 00:00:00 GMT+0100';
      const actual = getPetitionEndDate({ expires }).toString();
      const expected = expires;

      assert.equal(actual, expected);
    });
  });

  context('when a created date is given and no expiry date is given', () => {
    it('returns the expiry date', () => {
      const created = 'Thu Dec 01 2016 00:00:00 GMT+0100';
      const actual = getPetitionEndDate({ created }).toString();
      const expected = moment(created).add(30, 'days').toString();

      assert.equal(actual, expected);
    });
  });
});
