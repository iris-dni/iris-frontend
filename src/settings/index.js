import defaultConfig from './config';
import mergeSettings from './merge';
import getBundles from './bundles';

const customConfig = process.env.THEME_PATH
  ? require('../../' + process.env.THEME_PATH + '/config')
  : require('theme/config');

const mergedSettings = mergeSettings(defaultConfig, customConfig);
const bundles = getBundles();

export default Object.assign({},
  mergedSettings,
  { bundles }
);
