/* global CustomEvent */
import ReactGA from 'react-ga';
import settings from 'settings';

export default () => {
  if (__CLIENT__) {
    const { pathname } = window.location;
    const { ga } = settings;

    const pageviewEvent = typeof CustomEvent !== 'undefined' && // Required as it’s not defined during tests.
      new CustomEvent('IRIS_pageview');

    if (ga.APIKey) {
      ReactGA.set({ page: pathname });
      ReactGA.pageview(pathname);
    }

    window.dispatchEvent(pageviewEvent);
  }
};
