import { assert } from 'chai';

import {
  showFlashMessage,
  hideFlashMessage
} from 'actions/FlashActions';

describe('FlashActions', () => {
  describe('showModalWindow', () => {
    it('returns SHOW_FLASH_MESSAGE action', () => {
      const result = showFlashMessage();
      const actual = result.type;
      const expected = 'SHOW_FLASH_MESSAGE';

      assert.equal(actual, expected);
    });

    it('passes text to action', () => {
      const result = showFlashMessage('There is an error');
      const actual = result.text;
      const expected = 'There is an error';

      assert.equal(actual, expected);
    });

    it('passes modifier to action', () => {
      const result = showFlashMessage('There is an error', 'error');
      const actual = result.modifier;
      const expected = 'error';

      assert.equal(actual, expected);
    });

    it('passes duration to action', () => {
      const result = showFlashMessage('There is an error', 'error', 5000);
      const actual = result.duration;
      const expected = 5000;

      assert.equal(actual, expected);
    });

    it('returns HIDE_FLASH_MESSAGE action', () => {
      const result = hideFlashMessage();
      const actual = result.type;
      const expected = 'HIDE_FLASH_MESSAGE';

      assert.equal(actual, expected);
    });
  });
});
