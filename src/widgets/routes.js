import React from 'react';
import { Route, Router } from 'react-router';

import logPageview from 'helpers/logPageview';
import getHistory from 'helpers/getHistory';

import WidgetApp from 'containers/Widget';
import PetitionWidget from 'containers/PetitionWidget';

export default (props = {}) => (
  <Router history={getHistory(props.store)} onUpdate={logPageview}>
    <Route path='/' component={WidgetApp}>
      <Route path='embed/:id' component={PetitionWidget} />
    </Route>
  </Router>
);
