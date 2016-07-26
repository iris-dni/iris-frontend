import defaultConfig from 'theme/config';
import mergeConfig from 'config/merge';
import getBundles from 'config/bundles';
import requireThemeFile from 'helpers/requireThemeFile';

const customConfig = requireThemeFile('config');
const mergedConfig = mergeConfig(defaultConfig, customConfig);
const bundles = getBundles();

export default Object.assign({},
  mergedConfig,
  { bundles }
);
