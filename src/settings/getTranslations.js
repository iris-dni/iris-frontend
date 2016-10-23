import mergeSettings from './merge';
import { useCustomTheme } from './getThemePath';

const defaultTranslations = require('theme/translations');

const themeTranslations = useCustomTheme
  ? require('../../' + process.env.THEME_PATH + '/translations')
  : {};

const mergedTranslations = mergeSettings(defaultTranslations, themeTranslations);

console.log(mergedTranslations);

module.exports = mergedTranslations;
