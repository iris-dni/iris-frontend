import mergeSettings from './merge';
import themeConfig from 'theme/config';

const customThemePath = process.env.THEME_PATH || '';
const useCustomTheme = customThemePath && !process.env.TEST_ENV;

const customThemeConfig = useCustomTheme
  ? require('../../' + process.env.THEME_PATH + '/config')
  : {};

const mergedConfig = mergeSettings(themeConfig, customThemeConfig);

module.exports = mergedConfig;
