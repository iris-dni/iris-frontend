import { defaultsDeep } from 'lodash/object';

export default (defaultConfig = {}, customConfig = {}) => defaultsDeep(
  (customConfig.default || customConfig), defaultConfig
);
