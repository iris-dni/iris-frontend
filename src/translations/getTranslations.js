import mergeObjects from 'helpers/mergeObjects';
import themeTranslations from 'theme/translations';

const customThemePath = process.env.THEME_PATH || '';
const useCustomTheme = customThemePath && !process.env.TEST_ENV;

const customThemeTranslations = useCustomTheme
  ? require('../../' + process.env.THEME_PATH + '/translations')
  : {};

const mergedTranslations = mergeObjects(themeTranslations, customThemeTranslations);

export default mergedTranslations;
