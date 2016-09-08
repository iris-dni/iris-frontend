import { assert } from 'chai';

import {
  toggleMenu,
  resetMenu
} from 'actions/NavigationActions';

describe('NavigationActions', () => {
  describe('toggleMenu', () => {
    it('returns TOGGLE_MENU action', () => {
      const result = toggleMenu();
      const actual = result.type;
      const expected = 'TOGGLE_MENU';

      assert.equal(actual, expected);
    });
  });

  describe('resetMenu', () => {
    it('returns REST_MENU action', () => {
      const result = resetMenu();
      const actual = result.type;
      const expected = 'RESET_MENU';

      assert.equal(actual, expected);
    });
  });
});
