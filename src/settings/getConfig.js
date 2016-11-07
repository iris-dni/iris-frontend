import mergeSettings from './merge';
import config from './config';

const customThemePath = process.env.THEME_PATH || '';
const useCustomTheme = customThemePath && !process.env.TEST_ENV;

const themeConfig = useCustomTheme
  ? require('../../' + process.env.THEME_PATH + '/config')
  : require('theme/config');

const mergedConfig = mergeSettings(config, themeConfig);

module.exports = mergedConfig;
