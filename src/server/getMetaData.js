import getBrowserTitle from './getBrowserTitle';
import getPageSchema from './getPageSchema';

export default (componentName, state = {}) => {
  return {
    title: getBrowserTitle(componentName, state),
    schema: getPageSchema(componentName, state)
  };
};
