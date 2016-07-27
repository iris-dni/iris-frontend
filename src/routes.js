import React from 'react';
import { Route, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Home from 'views/Home';
import Basic from 'containers/Basic';
import Styleguide from 'views/Styleguide';
import Petition from 'containers/Petition';

export default function (props = {}) {
  let history = browserHistory;

  if (props.store) {
    history = syncHistoryWithStore(browserHistory, props.store);
  }

  return (
    <Router history={history}>
      <Route path='/' component={Home} />
      <Route path='/basic' component={Basic} />
      <Route path='/styleguide' component={Styleguide} />
      <Route path='/home' component={Home} />
      <Route path='/petitions/:id' component={Petition} />
    </Router>
  );
}
