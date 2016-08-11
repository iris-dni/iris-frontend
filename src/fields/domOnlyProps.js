//
// INFO:
//
// Needed due to this:
// https://github.com/erikras/redux-form/issues/1441#issuecomment-236966387
//
// Ideally we would upgrade redux-form to 6.x, but
// we then need to upgrade react-hot-loader to 3.x:
// https://github.com/erikras/redux-form/issues/1010#issuecomment-221524502
//
// Upgrading react-hot-loader is non-trivial so leaving it for now
//
const domOnlyProps = ({
  initialValue,
  autofill,
  onUpdate,
  valid,
  invalid,
  dirty,
  pristine,
  active,
  touched,
  visited,
  autofilled,
  ...domProps }) => domProps;

export default domOnlyProps;
