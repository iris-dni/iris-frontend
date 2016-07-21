import pattern from 'helpers/pathPattern';
import petition from './repositories/petition';

export default (path, params) => {
  if (pattern.match(path, petition.show.path)) return petition.show;

  return {
    request: () => { return {}; }
  };
};
