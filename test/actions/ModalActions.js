import { assert } from 'chai';

import {
  showModalWindow,
  hideModalWindow
} from 'actions/ModalActions';

describe('ModalActions', () => {
  describe('showModalWindow', () => {
    const modal = { type: 'auth' };

    it('returns SHOW_MODAL_WINDOW action', () => {
      const result = showModalWindow();
      const actual = result.type;
      const expected = 'SHOW_MODAL_WINDOW';

      assert.equal(actual, expected);
    });

    it('passes modalType to action', () => {
      const result = showModalWindow(modal);
      const actual = result.modal.type;
      const expected = 'auth';

      assert.equal(actual, expected);
    });

    it('passes location to action', () => {
      const result = showModalWindow(modal, '/petitions');
      const actual = result.location;
      const expected = '/petitions';

      assert.equal(actual, expected);
    });

    it('returns HIDE_MODAL_WINDOW action', () => {
      const result = hideModalWindow();
      const actual = result.type;
      const expected = 'HIDE_MODAL_WINDOW';

      assert.equal(actual, expected);
    });
  });
});
