import { assign } from 'lodash/object';

export default (data, petition) => assign({}, data, { petition });
