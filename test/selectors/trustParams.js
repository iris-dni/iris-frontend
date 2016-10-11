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

  it('returns `trustId` key', () => {
    const result = getTrustParams({
      trustId: '1234'
    });
    const actual = result.hasOwnProperty('trustId');
    assert.isTrue(actual);
  });
});
