const REGEX = new RegExp(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})\S*\/?$/i);

export default (string = '') => {
  return REGEX.test(string);
};
