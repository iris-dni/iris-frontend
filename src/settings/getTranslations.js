import mergeSettings from './merge';
import { useCustomTheme } from './getThemePath';
import translations from 'theme/translations';

const themeTranslations = useCustomTheme
  ? require('../../' + process.env.THEME_PATH + '/translations')
  : {};

const mergedTranslations = mergeSettings(translations, themeTranslations);

module.exports = mergedTranslations;
