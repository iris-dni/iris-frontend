import chai from 'chai';
import moment from 'moment';
import getPetitionEndDate from 'selectors/petitionEndDate';
import settings from 'settings';

const { assert } = chai;

describe('getPetitionEndDate', () => {
  it('returns the expiry date if given', () => {
    const dates = {
      expires: '2016-08-02T03:33:21',
      created: '2016-08-02T03:33:21'
    };

    const actual = getPetitionEndDate(dates);
    const expected = moment(dates.expires);

    assert.equal(actual.toISOString(), expected.toISOString());
  });

  it('returns the create date plus the days to votesPercentage when no effective given', () => {
    const dates = {
      expires: null,
      created: '2016-08-02T03:33:21'
    };

    const actual = getPetitionEndDate(dates).toISOString();
    const expected = moment(dates.created).add(settings.daysToVote, 'days').toISOString();

    assert.equal(actual, expected);
  });
});
