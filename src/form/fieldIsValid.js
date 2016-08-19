export default (helper = {}) => {
  return helper.touched && !helper.error && helper.value;
};
