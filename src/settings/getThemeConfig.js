import defaultConfig from './config';
import { useCustomTheme } from './getThemePath';
import mergeSettings from './merge';

const themeConfig = useCustomTheme
  ? require('../../' + process.env.THEME_PATH + '/config')
  : require('theme/config');

const mergedSettings = mergeSettings(defaultConfig, themeConfig);

export default mergedSettings;
