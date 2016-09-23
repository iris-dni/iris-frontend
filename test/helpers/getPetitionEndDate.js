import { assert } from 'chai';
import moment from 'moment';
import getPetitionEndDate from 'helpers/getPetitionEndDate';
import settings from 'settings';

describe('getPetitionEndDate', () => {
  context('when no dates given', () => {
    it('returns the date <daysToVote> days in the future', () => {
      const actual = getPetitionEndDate({}).toString();
      const expected = moment().add(settings.daysToVote, 'days').toString();

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
      const expected = moment(date).add(settings.daysToVote, 'days').toString();

      assert.equal(actual, expected);
    });
  });

  it('returns the expiry date if given', () => {
    const dates = {
      expires: '2016-08-02T03:33:21',
      created: '2016-08-02T03:33:21'
    };

    const actual = getPetitionEndDate(dates);
    const expected = moment(dates.expires);

    assert.equal(actual.toISOString(), expected.toISOString());
  });

  it('returns the create date plus the days to votes when no effective given', () => {
    const dates = {
      expires: null,
      created: '2016-08-02T03:33:21'
    };

    const actual = getPetitionEndDate(dates).toISOString();
    const expected = moment(dates.created).add(settings.daysToVote, 'days').toISOString();

    assert.equal(actual, expected);
  });
});
