import chai from 'chai';
import navigation from 'reducers/navigation';

const { assert } = chai;

describe('navigation reducer', () => {
  const INITIAL_STATE = {
    opened: false,
    wasOpened: false
  };

  it('handles the TOGGLE_MENU action', () => {
    const actual = navigation({
      wasOpened: false,
      opened: false
    }, {
      type: 'TOGGLE_MENU'
    });

    const expected = {
      wasOpened: true,
      opened: true
    };

    assert.deepEqual(actual, expected);
  });

  it('handles the RESET_MENU action', () => {
    const actual = navigation({
      opened: true,
      wasOpened: true
    }, {
      type: 'RESET_MENU'
    });

    const expected = INITIAL_STATE;

    assert.deepEqual(actual, expected);
  });

  it('provides fallback state', () => {
    const actual = navigation(undefined, {});
    const expected = INITIAL_STATE;

    assert.deepEqual(actual, expected);
  });
});
