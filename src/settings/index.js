import config from './config';
import translations from './getTranslations';
import mergeSettings from './merge';

const customThemePath = process.env.THEME_PATH || '';
const useCustomTheme = customThemePath && !process.env.TEST_ENV;

const themeConfig = useCustomTheme
  ? require('../../' + process.env.THEME_PATH + '/config')
  : require('theme/config');

const mergedSettings = mergeSettings(config, themeConfig);

// FIXME: until we have time to split out settings and translations
// in the different components they are merged into settings
const settings = mergeSettings(mergedSettings, translations);

export default settings;
export const ssoProviders = settings.ssoProviders;
export const authSettings = settings.auth;
