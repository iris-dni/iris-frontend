import chai from 'chai';
import navigation from 'reducers/navigation';

const { assert } = chai;

describe('navigation reducer', () => {
  const INITIAL_STATE = {
    opened: false,
    wasOpened: false
  };

  it('handles the TOGGLE_MOBILE_MENU action', () => {
    const actual = navigation({
      opened: false,
      wasOpened: false
    }, {
      type: 'TOGGLE_MOBILE_MENU'
    });

    const expected = {
      opened: true,
      wasOpened: true
    };

    assert.deepEqual(actual, expected);
  });

  it('handles the CLOSE_MOBILE_MENU action', () => {
    const actual = navigation({
      opened: true,
      wasOpened: true
    }, {
      type: 'CLOSE_MOBILE_MENU'
    });

    const expected = {
      opened: false,
      wasOpened: true
    };

    assert.deepEqual(actual, expected);
  });

  it('handles the DESTROY_MOBILE_MENU action', () => {
    const actual = navigation({
      opened: true,
      wasOpened: true
    }, {
      type: 'DESTROY_MOBILE_MENU'
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
