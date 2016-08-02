import chai from 'chai';
import requireThemeFile from 'helpers/requireThemeFile';

const { assert } = chai;

describe('requireThemeFile', () => {
  it('returns empty object when file does not exist', () => {
    const actual = requireThemeFile('this/doesnt/exist');
    const expected = {};

    assert.deepEqual(actual, expected);
  });
});
