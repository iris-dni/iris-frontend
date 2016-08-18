import chai from 'chai';
import getPetitionDaysRemaining from 'helpers/getPetitionDaysRemaining';

const { assert } = chai;

describe('getPetitionDaysRemaining', () => {
  it('returns 30 days when no dates given', () => {
    const actual = getPetitionDaysRemaining({});
    const expected = 30;

    assert.equal(actual, expected);
  });

  it('returns correctly when no effective given', () => {
    const actual = getPetitionDaysRemaining({
      created: '2016-01-28T02:54:33'
    });
    const expected = 30;

    assert.equal(actual, expected);
  });

  it('returns correctly when effective given', () => {
    const actual = getPetitionDaysRemaining({
      created: '2016-01-28T02:54:33',
      effective: '2016-01-29T02:54:33'
    });
    const expected = 29;

    assert.equal(actual, expected);
  });

  it('returns correctly when expiry given', () => {
    const actual = getPetitionDaysRemaining({
      created: '2016-01-28T02:54:33',
      effective: '2016-01-29T02:54:33',
      expires: '2016-02-14T02:54:33'
    });
    const expected = 16;

    assert.equal(actual, expected);
  });
});
