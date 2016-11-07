import mergeSettings from './merge';
import translations from './translations';

const customThemePath = process.env.THEME_PATH || '';
const useCustomTheme = customThemePath && !process.env.TEST_ENV;

const themeTranslations = useCustomTheme
  ? require('../../' + process.env.THEME_PATH + '/translations')
  : require('theme/translations');

const mergedTranslations = mergeSettings(translations, themeTranslations);

module.exports = mergedTranslations;
