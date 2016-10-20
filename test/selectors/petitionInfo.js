import { assert } from 'chai';
import getPetitionInfo from 'selectors/petitionInfo';

describe('petitionInfo selector', () => {
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

  it('returns `ending` key', () => {
    const result = getPetitionInfo();
    const actual = result.hasOwnProperty('ending');
    assert.isTrue(actual);
  });
});
