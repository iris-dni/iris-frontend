import chai from 'chai';
import modalWindow from 'reducers/modalWindow';

const { assert } = chai;

describe('modalWindow reducer', () => {
  it('handles the SHOW_MODAL_WINDOW action with location as a string', () => {
    const actual = modalWindow({
      active: false,
      hidden: true
    }, {
      type: 'SHOW_MODAL_WINDOW',
      modal: { type: 'auth' },
      location: '/petitions'
    });
    const expected = {
      type: 'auth',
      active: true,
      hidden: false,
      returnUrl: '/petitions'
    };

    assert.deepEqual(actual, expected);
  });

  it('handles the SHOW_MODAL_WINDOW action with location as an object', () => {
    const actual = modalWindow({}, {
      type: 'SHOW_MODAL_WINDOW',
      modal: { type: 'auth' },
      location: {
        pathname: '/petitions',
        search: '?hello=world'
      }
    });
    const expected = {
      type: 'auth',
      active: true,
      hidden: false,
      returnUrl: '/petitions?hello=world'
    };

    assert.deepEqual(actual, expected);
  });

  it('handles the HIDE_MODAL_WINDOW action', () => {
    const actual = modalWindow({
      type: 'auth'
    }, {
      type: 'HIDE_MODAL_WINDOW'
    });
    const expected = {
      active: false,
      hidden: true
    };

    assert.deepEqual(actual, expected);
  });

  it('provides fallback state', () => {
    const actual = modalWindow(undefined, {});
    const expected = {};

    assert.deepEqual(actual, expected);
  });
});
