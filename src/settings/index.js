import { get } from 'lodash/object';
import config from './getConfig';
import translations from './getTranslations';
import mergeSettings from './merge';

// FIXME: until we have time to split out settings and translations
// in the different components they are merged into settings
const settings = mergeSettings(config, translations);

export default settings;

export const ssoProviders = settings.ssoProviders;
export const authSettings = settings.auth;

export const setting = (key) => get(config, key, '');
export const translation = (key) => get(translations, key, '');
