import { merge } from 'lodash/object';

export default (defaultConfig = {}, customConfig = {}) =>
  merge(defaultConfig, (customConfig.default || customConfig));
