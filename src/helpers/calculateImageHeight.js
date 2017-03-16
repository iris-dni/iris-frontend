import { round } from 'lodash/math';
import { get } from 'lodash/object';

export default (size = 0, attrs = {}) => (
  get(attrs, 'h', attrs.height) && get(attrs, 'w', attrs.width) && size
    ? round((parseInt(size, 10) / parseInt(get(attrs, 'w', attrs.width), 10)) * parseInt(get(attrs, 'h', attrs.height), 10))
    : ''
);
