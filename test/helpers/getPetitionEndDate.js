import { assert } from 'chai';
import getPetitionEndDate from 'helpers/getPetitionEndDate';

describe('getPetitionEndDate', () => {
  context('with a full dc object', () => {
    const dc = {
      created: '2016-10-10',
      effective: '2016-10-15',
      expires: '2016-11-01'
    };

    it('returns the correct text string', () => {
      const actual = getPetitionEndDate({ dc });
      const expected = 'Ending on 01-11-2016';

      assert.equal(actual, expected);
    });
  });

  context('without expires date', () => {
    const dc = {
      created: '2016-10-10'
    };

    it('returns the correct text string', () => {
      const actual = getPetitionEndDate({ dc });
      const expected = 'Ending on 09-11-2016';

      assert.equal(actual, expected);
    });
  });
});
