export default (helper = {}) => {
  return helper.touched && !helper.pristine && !helper.error && helper.value;
};
