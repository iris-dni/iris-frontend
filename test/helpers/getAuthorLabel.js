import { assert } from 'chai';
import getAuthorLabel from 'helpers/getAuthorLabel';

describe('getAuthorLabel', () => {
  context('without a given author', () => {
    it('returns an empty string', () => {
      const actual = getAuthorLabel();
      const expected = '';

      assert.equal(actual, expected);
    });
  });

  context('for a given author', () => {
    const author = 'Jane Doe';

    it('returns a "by <author>" string', () => {
      const actual = getAuthorLabel(author);
      const expected = `by ${author}`;

      assert.equal(actual, expected);
    });
  });
});
