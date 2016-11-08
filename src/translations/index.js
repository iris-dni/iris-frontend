import { get } from 'lodash/object';
import translations from './getTranslations';

export default translations;

export const translation = (key, fallback) => get(translations, key, (fallback || key));
