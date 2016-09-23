import { assert } from 'chai';
import getPetitionStartDate from 'helpers/getPetitionStartDate';

describe('getPetitionStartDate', () => {
  context('with effective date given', () => {
    const dc = {
      created: '2016-10-10',
      effective: '2016-10-15'
    };

    it('returns effective date', () => {
      const actual = getPetitionStartDate(dc);
      const expected = '2016-10-15';

      assert.equal(actual, expected);
    });
  });

  context('with no effective date given', () => {
    const dc = {
      created: '2016-10-10',
      effective: null
    };

    it('returns creation date', () => {
      const actual = getPetitionStartDate(dc);
      const expected = '2016-10-10';

      assert.equal(actual, expected);
    });
  });
});
