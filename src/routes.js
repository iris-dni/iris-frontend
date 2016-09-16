import React from 'react';
import { Route, Router, IndexRedirect, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from 'containers/App';
import Home from 'views/Home';
import LoginPage from 'containers/Login';
import Logout from 'containers/Logout';
import Petition from 'containers/Petition';
import Petitions from 'containers/Petitions';
import NewPetition from 'containers/NewPetition';
import EditPetition from 'containers/EditPetition';
import PublishedPetition from 'containers/PublishedPetition';

export default function (props = {}) {
  let history = browserHistory;

  if (props.store) {
    history = syncHistoryWithStore(browserHistory, props.store);
  }

  return (
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRedirect to='/petitions' />
        <Route path='home' component={Home} />
        <Route path='auth/login' component={LoginPage} />
        <Route path='auth/logout' component={Logout} />
        <Route path='petitions'>
          {/* Nest these 4 to support proper `activeClassName` behavior. */}
          <IndexRoute component={Petitions} />
          <Route path=':cityName-:city(/page/:page)' component={Petitions} />
          <Route path=':state(/:cityName-:city(/page/:page))' component={Petitions} />
          <Route path='page/:page' component={Petitions} />
        </Route>
        <Route path='/petitions/new' component={NewPetition} />
        <Route path='/petitions/:id' component={Petition} />
        <Route path='/petitions/:id/edit' component={EditPetition} />
        <Route path='/petitions/:id/published' component={PublishedPetition} />
      </Route>
    </Router>
  );
}
