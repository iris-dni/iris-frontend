const REGEX = new RegExp(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\?=\.-_]*)*\/?$/i);

export default (string = '') => {
  return REGEX.test(string);
};
