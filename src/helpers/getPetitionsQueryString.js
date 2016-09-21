import encodeParams from 'helpers/encodeParams';
import { pick } from 'lodash/object';

export default (query) => encodeParams(pick(
  query,
  ['limit', 'sort']
));
