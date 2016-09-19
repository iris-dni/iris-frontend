import encodeParams from 'helpers/encodeParams';
import { pick } from 'lodash/object';

export default (query) => encodeParams(pick(
  query,
  ['page', 'city', 'limit']
));
