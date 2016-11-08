import { get } from 'lodash/object';
import { isEqual } from 'lodash/lang';

export default (oldProps = {}, newProps = {}) => !isEqual(oldProps.params, newProps.params) ||
  !isEqual(get(oldProps, 'location.query', {}), get(newProps, 'location.query', {}));
