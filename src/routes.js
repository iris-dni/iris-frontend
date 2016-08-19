import React from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from 'containers/App';
import LoginPage from 'services/auth/Login';
import Logout from 'services/auth/Logout';
import Home from 'views/Home';
import Petition from 'containers/Petition';
import Petitions from 'containers/Petitions';
import CreatePetition from 'containers/CreatePetition';
import Private from 'containers/Private';
import Restricted from 'containers/Restricted';

export default function (props = {}) {
  let history = browserHistory;

  if (props.store) {
    history = syncHistoryWithStore(browserHistory, props.store);
  }

  return (
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='auth/login' component={LoginPage} />
        <Route path='auth/logout' component={Logout} />
        <Route path='home' component={Home} />
        <Route path='petitions' component={Petitions} />
        <Route path='petitions/new' component={CreatePetition} />
        <Route path='petitions/:id' component={Petition} />
        <Route path='private' component={Restricted(Private)} />
      </Route>
    </Router>
  );
}
