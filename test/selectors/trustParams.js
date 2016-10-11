import { assert } from 'chai';
import getTrustParams from 'selectors/trustParams';

describe('trustParams selector', () => {
  it('returns `isTrustedUser` key', () => {
    const result = getTrustParams({
      isTrustedUser: true
    });
    const actual = result.hasOwnProperty('isTrustedUser');
    assert.isTrue(actual);
  });

  it('returns `petitionId` key', () => {
    const result = getTrustParams({
      petitionId: '1234'
    });
    const actual = result.hasOwnProperty('petitionId');
    assert.isTrue(actual);
  });
});
