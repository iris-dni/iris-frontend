import { assert } from 'chai';
import sinon from 'sinon';
import moment from 'moment';
import getPetitionDaysRemaining from 'helpers/getPetitionDaysRemaining';

describe('getPetitionDaysRemaining', () => {
  beforeEach(() => {
    const fakeTimeNow = moment('2016-02-03').valueOf();
    sinon.useFakeTimers(fakeTimeNow);
  });

  it('returns 30 days when no dates given', () => {
    const actual = getPetitionDaysRemaining({});
    const expected = 30;

    assert.equal(actual, expected);
  });

  it('returns correctly when no effective given', () => {
    const actual = getPetitionDaysRemaining({
      created: '2016-01-28T02:54:33'
    });
    const expected = 24;

    assert.equal(actual, expected);
  });

  it('returns correctly when expiry given', () => {
    const actual = getPetitionDaysRemaining({
      created: '2016-01-28T02:54:33',
      expires: '2016-02-14T02:54:33'
    });
    const expected = 11;

    assert.equal(actual, expected);
  });

  it('returns correctly when expiry is in the past', () => {
    const actual = getPetitionDaysRemaining({
      created: '2016-01-28T02:54:33',
      expires: '2016-02-02T02:54:33'
    });
    const expected = 0;

    assert.equal(actual, expected);
  });
});
