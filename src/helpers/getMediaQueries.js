import { sidebarBreakpoint } from 'assets/styles/exports.scss';

const tweakMinWidth = (breakpoint) => {
  const unit = breakpoint.slice(-2);
  const value = breakpoint.substring(0, breakpoint.length - 2);
  const tweak = unit === 'px' ? 1 : 0.01;
  const intValue = parseInt(value, 10);
  const tweakedBreakpoint = intValue + tweak;
  return isNaN(intValue)
    ? breakpoint
    : [tweakedBreakpoint, unit].join('');
};

export const mediaQueries = {
  small: `screen and (max-width: ${sidebarBreakpoint})`,
  medium: `screen and (min-width: ${tweakMinWidth(sidebarBreakpoint)})`,
  huge: Infinity
};

export const serverMediaQueries = {
  medium: {
    small: true,
    medium: false,
    huge: false
  },
  small: {
    small: false,
    medium: true,
    huge: false
  }
};
