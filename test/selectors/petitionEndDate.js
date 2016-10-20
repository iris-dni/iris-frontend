import { assert } from 'chai';
import moment from 'moment';
import getPetitionEndDate from 'selectors/petitionEndDate';
import settings from 'settings';

describe('petitionEndDate selector', () => {
  context('when no dates given', () => {
    it('returns the date <daysToVote> days in the future', () => {
      const actual = getPetitionEndDate({});
      const expected = moment().add(settings.daysToVote, 'days').toISOString();

      assert.equal(actual, expected);
    });
  });

  context('when an expiry date is given', () => {
    it('returns the expiry date', () => {
      const date = '2016-01-28T01:54:33.000Z';
      const expires = date;
      const actual = getPetitionEndDate({ expires });
      const expected = moment(date).toISOString();

      assert.equal(actual, expected);
    });
  });

  context('when a created date is given and no expiry date is given', () => {
    it('returns the expiry date', () => {
      const date = '2016-01-28T01:54:33.000Z';
      const created = date;
      const actual = getPetitionEndDate({ created });
      const expected = moment(date).add(settings.daysToVote, 'days').toISOString();

      assert.equal(actual, expected);
    });
  });

  it('returns the expiry date if given', () => {
    const dates = {
      expires: '2016-08-02T01:33:21.000Z',
      created: '2016-08-02T01:33:21.000Z'
    };

    const actual = getPetitionEndDate(dates);
    const expected = moment(dates.expires).toISOString();

    assert.equal(actual, expected);
  });

  it('returns the create date plus the days to votes when no effective given', () => {
    const dates = {
      expires: null,
      created: '2016-08-02T03:33:21'
    };

    const actual = getPetitionEndDate(dates);
    const expected = moment(dates.created).add(settings.daysToVote, 'days').toISOString();

    assert.equal(actual, expected);
  });
});
