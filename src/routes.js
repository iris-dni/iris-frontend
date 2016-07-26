import React from 'react';
import { Route, Router, browserHistory } from 'react-router';

import Home from 'views/Home';
import Basic from 'containers/Basic';
import Styleguide from 'views/Styleguide';
import Petition from 'containers/Petition';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
    <Route path='/basic' component={Basic} />
    <Route path='/styleguide' component={Styleguide} />
    <Route path='/petitions/:id' component={Petition} />
  </Router>
);
