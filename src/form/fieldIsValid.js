import { isEmpty } from 'lodash/lang';
import { omitBy } from 'lodash/object';

export default (helper = {}) => {
  return helper.touched &&
    !helper.pristine &&
    !helper.error &&
    helper.value &&
    // Annoying check for empty object, even when
    // obj = { id: null } - API requires this null value
    !isEmpty(omitBy(helper.value, val => !val));
};
