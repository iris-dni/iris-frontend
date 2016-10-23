import config from './getThemeConfig';
import translations from './getTranslations';
import mergeSettings from './merge';

// FIXME: until we have time to split out settings and translations
// in the different components they are merged into settings
const mergedSettings = mergeSettings(config, translations);

export default mergedSettings;
export const ssoProviders = mergedSettings.ssoProviders;
export const authSettings = mergedSettings.auth;
