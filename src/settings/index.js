import { get } from 'lodash/object';
import config from './getConfig';
import translations from './getTranslations';
import mergeObjects from 'helpers/mergeObjects';

const settings = mergeObjects(config, translations);

export default settings;

export const setting = (key, fallback) => get(config, key, (fallback || key));
export const translation = (key, fallback) => get(translations, key, (fallback || key));

export const ssoProviders = setting('ssoProviders');
export const authSettings = setting('auth');

