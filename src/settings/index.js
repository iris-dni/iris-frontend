import { get } from 'lodash/object';
import config from './getConfig';
import translations from './getTranslations';
import mergeSettings from './merge';

const settings = mergeSettings(config, translations);

export default settings;

export const setting = (key) => get(config, key, '');
export const translation = (key) => get(translations, key, '');

export const ssoProviders = setting('ssoProviders');
export const authSettings = setting('auth');

