import getBrowserTitle from './getBrowserTitle';
import getPageSchema from './getPageSchema';

export default (componentName, state = {}) => {
  return {
    title: getBrowserTitle(componentName, state),
    schema: JSON.stringify(getPageSchema(componentName, state))
  };
};
