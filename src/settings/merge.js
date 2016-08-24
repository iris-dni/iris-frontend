import { assign } from 'lodash/object';

export default (defaultConfig = {}, customConfig = {}) => {
  return assign({},
    defaultConfig,
    (customConfig.default || customConfig)
  );
};
