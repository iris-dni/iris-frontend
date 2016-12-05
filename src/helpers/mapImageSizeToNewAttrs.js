import { get } from 'lodash/object';

export default (size = 0, attrs = {}) => (
  size ? {
    w: parseInt(size, 10),
    h: get(attrs, 'h', attrs.height)
      ? (parseInt(size, 10) / parseInt(get(attrs, 'w', attrs.width), 10)) * parseInt(get(attrs, 'h', attrs.height), 10)
      : ''
  } : {}
);
