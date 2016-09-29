import { sidebarBreakpoint } from 'assets/styles/exports.scss';

export const mediaQueries = {
  small: `screen and (max-width: ${sidebarBreakpoint})`,
  medium: `screen and (min-width: ${sidebarBreakpoint})`,
  huge: Infinity
};

export const serverMediaQueries = {
  small: true,
  medium: false,
  huge: false
};
