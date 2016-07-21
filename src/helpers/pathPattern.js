import UrlPattern from 'url-pattern';

export default {
  /*
   * path: a path string, e.g. 'petitions/1/edit'
   * pattern: the pattern string to match, e.g. 'petitions/:id/edit'
   *
   * returns null if the path does not match
   * returns the params object if the path matches
   */
  match: (path, pattern) => {
    const urlPattern = new UrlPattern(`${pattern}(/)`);
    return urlPattern.match(path);
  },
  /*
   * pattern: the pattern string to match, e.g. 'petitions/:id/edit'
   * params: a params object, e.g. { id: '1' }
   *
   * returns the path without params if no params are given
   * returns the full path with params when params are given
   */
  stringify: (pattern, params) => {
    const urlPattern = new UrlPattern(`${pattern}(/)`);
    return urlPattern.stringify(params || {});
  }
};
