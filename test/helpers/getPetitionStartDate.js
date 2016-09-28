import { assert } from 'chai';
import getPetitionStartDate from 'helpers/getPetitionStartDate';

describe('getPetitionStartDate', () => {
  context('with a full dc object', () => {
    const dc = {
      created: '2016-10-10',
      effective: '2016-10-15',
      expires: '2016-11-01'
    };

    it('returns the correct text string', () => {
      const actual = getPetitionStartDate({ dc });
      const expected = 'Started on 15-10-2016';

      assert.equal(actual, expected);
    });
  });

  context('without effective date', () => {
    const dc = {
      created: '2016-10-10',
      expires: '2016-11-01'
    };

    it('returns the correct text string', () => {
      const actual = getPetitionStartDate({ dc });
      const expected = 'Started on 10-10-2016';

      assert.equal(actual, expected);
    });
  });
});
