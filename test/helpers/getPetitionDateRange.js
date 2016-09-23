import { assert } from 'chai';
import moment from 'moment';
import getPetitionDateRange from 'helpers/getPetitionDateRange';

describe('getPetitionDateRange', () => {
  context('with a full dc object', () => {
    const dc = {
      created: '2016-10-10',
      effective: '2016-10-15',
      expires: '2016-11-01'
    };

    it('returns the date range from effective to expiry', () => {
      const actual = getPetitionDateRange({ dc });
      const expected = '15-10-2016 to 01-11-2016';

      assert.equal(actual, expected);
    });
  });

  context('with a created and expiry date', () => {
    const dc = {
      created: '2016-10-10',
      expires: '2016-11-01'
    };

    it('returns the date range from created to expiry', () => {
      const actual = getPetitionDateRange({ dc });
      const expected = '10-10-2016 to 01-11-2016';

      assert.equal(actual, expected);
    });
  });

  context('without an expiry date', () => {
    const dc = {
      created: '2016-10-10'
    };

    it('returns the date range from created to the configured daysToVote date', () => {
      const actual = getPetitionDateRange({ dc });
      const expected = '10-10-2016 to 09-11-2016';

      assert.equal(actual, expected);
    });
  });

  context('without a dc object', () => {
    it('returns the date range from today to the configured daysToVote date', () => {
      const today = moment().format('DD-MM-YYYY');
      const future = moment().add(30, 'days').format('DD-MM-YYYY');

      const actual = getPetitionDateRange({});
      const expected = `${today} to ${future}`;

      assert.equal(actual, expected);
    });
  });
});
