import { assign } from 'lodash/object';

export default (values, petition) => ({
  petition: assign({}, {
    id: petition.id
  }, values)
});
