const customThemePath = process.env.THEME_PATH || '';
const useCustomTheme = customThemePath && !process.env.TEST_ENV;
const themePath = useCustomTheme ? '../../' + customThemePath : 'theme';

module.exports = {
  themePath,
  customThemePath,
  useCustomTheme
};
