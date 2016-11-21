import { assign } from 'lodash/object';

export default (data, user, petition) => assign({}, data, { user, petition });
