const serializeParam = (prefix, param, value) => {
  const prefixedParam = prefix ? `${prefix}[${param}]` : param;

  if (typeof (value) === 'object') {
    return Object.keys(value)
      .map(key => serializeParam(prefixedParam, parseKey(key), value[key]))
      .filter(serializedParam => !!serializedParam)
      .join('&');
  } else {
    return value && [prefixedParam, value].join('=');
  }
};

const parseKey = (key) => {
  return parseInt(key) >= 0
    ? ''
    : key;
};

export default (params) => {
  switch (params) {
    case null:
    case 'undefined':
    case {}:
      return '';
    default:
      return typeof (params) === 'string'
        ? params
        : serializeParam(false, false, params);
  }
};
