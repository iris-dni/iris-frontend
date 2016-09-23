import { assert } from 'chai';
import getPetitionInfo from 'selectors/petitionInfo';

describe('getPetitionSupporters', () => {
  it('returns `city` key', () => {
    const result = getPetitionInfo();
    const actual = result.hasOwnProperty('city');
    assert.isTrue(actual);
  });

  it('returns `owner` key', () => {
    const result = getPetitionInfo();
    const actual = result.hasOwnProperty('owner');
    assert.isTrue(actual);
  });

  it('returns `dateRange` from petition', () => {
    const result = getPetitionInfo();
    const actual = result.hasOwnProperty('dateRange');
    assert.isTrue(actual);
  });
});
