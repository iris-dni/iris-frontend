import React from 'react';
import ReactGA from 'react-ga';
import { Route, IndexRoute, Router } from 'react-router';

import settings from 'settings';
import App from 'containers/App';
import Home from 'containers/Home';
import LoginPage from 'containers/Login';
import Logout from 'containers/Logout';
import TrustPage from 'containers/Trust';
import Petition from 'containers/Petition';
import Petitions from 'containers/Petitions';
import NewPetition from 'containers/NewPetition';
import EditPetition from 'containers/EditPetition';
import PublishedPetition from 'containers/PublishedPetition';
import RespondToPetition from 'containers/RespondToPetition';
import getHistory from 'helpers/getHistory';
import logPageview from 'helpers/logPageview';

export default function (props = {}) {
  const history = getHistory(props.store);
  const { ga } = settings;

  if (ga.APIKey.length) {
    ReactGA.initialize(ga.APIKey, ga.initOptions);
  }

  return (
    <Router history={history} onUpdate={logPageview}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='auth/login' component={LoginPage} />
        <Route path='auth/logout' component={Logout} />
        <Route path='trust/support/:id' component={TrustPage} />
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
