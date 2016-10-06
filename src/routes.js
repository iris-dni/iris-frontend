/* global CustomEvent */
import React from 'react';
import { Route, IndexRoute, Router, IndexRedirect, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import ReactGA from 'react-ga';

import settings from 'settings';
import App from 'containers/App';
import LoginPage from 'containers/Login';
import Logout from 'containers/Logout';
import Petition from 'containers/Petition';
import Petitions from 'containers/Petitions';
import NewPetition from 'containers/NewPetition';
import EditPetition from 'containers/EditPetition';
import PublishedPetition from 'containers/PublishedPetition';
import RespondToPetition from 'containers/RespondToPetition';

const pageviewEvent = __CLIENT__ && new CustomEvent('IRIS_pageview');
const ga = settings.ga;

const logPageView = () => {
  if (__CLIENT__) {
    const pathname = window.location.pathname;

    if (ga.APIKey) {
      ReactGA.set({ page: pathname });
      ReactGA.pageview(pathname);
    }

    window.dispatchEvent(pageviewEvent);
  }
};

export default function (props = {}) {
  let history = browserHistory;

  if (props.store) {
    history = syncHistoryWithStore(browserHistory, props.store);
  }

  if (ga.APIKey) {
    ReactGA.initialize(ga.APIKey, ga.initOptions);
  }

  return (
    <Router history={history} onUpdate={logPageView}>
      <Route path='/' component={App}>
        <IndexRedirect to='/petitions' />
        <Route path='auth/login' component={LoginPage} />
        <Route path='auth/logout' component={Logout} />
        <Route path='petitions'>
          {/* Nest these 3 to support proper `activeClassName` behavior. */}
          <IndexRoute component={Petitions} />
          <Route path=':cityName-:city(/page(/:page))' component={Petitions} />
          <Route path='page/:page' component={Petitions} />
        </Route>
        <Route path='petitions/new' component={NewPetition} />
        <Route path='petitions/:id' component={Petition} />
        <Route path='petitions/:id/edit' component={EditPetition} />
        <Route path='petitions/:id/published' component={PublishedPetition} />
        <Route path='respond/:token' component={RespondToPetition} />
      </Route>
    </Router>
  );
}
