import chai from 'chai';
import getIncludedAssetPath from 'helpers/getIncludedAssetPath';

const { assert } = chai;

describe('getIncludedAssetPath', () => {
  it('returns path relative to the build folder', () => {
    const actual = getIncludedAssetPath('test.js');
    const expected = '/dist/test.js';

    assert.equal(actual, expected);
  });
});
