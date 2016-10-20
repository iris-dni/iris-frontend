import { assert } from 'chai';

import {
  toggleMobileMenu,
  closeMobileMenu,
  destroyMobileMenu
} from 'actions/NavigationActions';

describe('NavigationActions', () => {
  describe('toggleMobileMenu', () => {
    it('returns TOGGLE_MOBILE_MENU action', () => {
      const result = toggleMobileMenu();
      const actual = result.type;
      const expected = 'TOGGLE_MOBILE_MENU';

      assert.equal(actual, expected);
    });
  });

  describe('closeMobileMenu', () => {
    it('returns CLOSE_MOBILE_MENU action', () => {
      const result = closeMobileMenu();
      const actual = result.type;
      const expected = 'CLOSE_MOBILE_MENU';

      assert.equal(actual, expected);
    });
  });

  describe('destroyMobileMenu', () => {
    it('returns DESTROY_MOBILE_MENU action', () => {
      const result = destroyMobileMenu();
      const actual = result.type;
      const expected = 'DESTROY_MOBILE_MENU';

      assert.equal(actual, expected);
    });
  });
});
