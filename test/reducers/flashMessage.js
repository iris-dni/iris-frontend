import chai from 'chai';
import flashMessage from 'reducers/flashMessage';

const { assert } = chai;

describe('modalWindow reducer', () => {
  it('handles the SHOW_FLASH_MESSAGE action', () => {
    const actual = flashMessage({}, {
      type: 'SHOW_FLASH_MESSAGE',
      text: 'There was an error',
      modifier: 'error'
    });
    const expected = {
      text: 'There was an error',
      modifier: 'error'
    };

    assert.deepEqual(actual, expected);
  });

  it('handles the HIDE_FLASH_MESSAGE action', () => {
    const actual = flashMessage({
      text: 'There was an error',
      modifier: 'error'
    }, {
      type: 'HIDE_FLASH_MESSAGE'
    });
    const expected = {};

    assert.deepEqual(actual, expected);
  });

  it('provides fallback state', () => {
    const actual = flashMessage(undefined, {});
    const expected = {};

    assert.deepEqual(actual, expected);
  });
});
