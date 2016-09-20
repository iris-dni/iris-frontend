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
      const date = '2016-01-28T02:54:33';
      const expires = date;
      const actual = getPetitionEndDate({ expires }).toString();
      const expected = moment(date).toString();

      assert.equal(actual, expected);
    });
  });

  context('when a created date is given and no expiry date is given', () => {
    it('returns the expiry date', () => {
      const date = '2016-01-28T02:54:33';
      const created = date;
      const actual = getPetitionEndDate({ created }).toString();
      const expected = moment(date).add(30, 'days').toString();

      assert.equal(actual, expected);
    });
  });
});
