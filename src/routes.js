import React from 'react';
import { Route, Router, browserHistory } from 'react-router';

import Home from 'views/Home';
import Basic from 'containers/Basic';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
    <Route path='/basic' component={Basic} />
  </Router>
);
