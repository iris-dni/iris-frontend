export default (defaultConfig = {}, customConfig = {}) => {
  return Object.assign({},
    defaultConfig,
    (customConfig.default || customConfig)
  );
};
