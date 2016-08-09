import React from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Layout from 'views/Layout';
import Home from 'views/Home';
import Petition from 'containers/Petition';
import Petitions from 'containers/Petitions';

export default function (props = {}) {
  let history = browserHistory;

  if (props.store) {
    history = syncHistoryWithStore(browserHistory, props.store);
  }

  return (
    <Router history={history}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Home} />
        <Route path='home' component={Home} />
        <Route path='petitions' component={Petitions} />
        <Route path='petitions/:id' component={Petition} />
      </Route>
    </Router>
  );
}
