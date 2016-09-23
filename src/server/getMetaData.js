import getBrowserTitle from './getBrowserTitle';
import getOpenGraphData from './getOpenGraphData';
import getPageSchema from './getPageSchema';

export default (componentName, state = {}) => ({
  title: getBrowserTitle(componentName, state),
  schema: JSON.stringify(getPageSchema(componentName, state)),
  openGraph: getOpenGraphData(componentName, state)
});
