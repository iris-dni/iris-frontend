/* global CustomEvent */
import ReactGA from 'react-ga';
import settings from 'settings';

export default () => {
  if (__CLIENT__) {
    const { pathname } = window.location;
    const { googleAnalytics } = settings;

    const pageviewEventName = [
      process.env.SITE_NAME || 'iris',
      '_pageview'
    ].join('').trim();

    const pageviewEvent = typeof CustomEvent !== 'undefined' && // Required as it’s not defined during tests.
      new CustomEvent(pageviewEventName);

    if (googleAnalytics.APIKey) {
      ReactGA.set({ page: pathname });
      ReactGA.pageview(pathname);
    }

    window.dispatchEvent(pageviewEvent);
  }
};
