import defaultConfig from './config';
import mergeSettings from './merge';

const needsCustomThemePath = process.env.THEME_PATH && !process.env.TEST_ENV;

const customConfig = needsCustomThemePath
  ? require('../../' + process.env.THEME_PATH + '/config')
  : require('theme/config');

const mergedSettings = mergeSettings(defaultConfig, customConfig);

export default mergedSettings;
export const ssoProviders = mergedSettings.ssoProviders;
export const authSettings = mergedSettings.auth;
