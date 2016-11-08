import { isEqual } from 'lodash/lang';

export default (oldProps = {}, newProps = {}) => !isEqual(oldProps.params, newProps.params) ||
  !isEqual(oldProps.location.query, newProps.location.query);
