import React from 'react';
import { Route, Router, browserHistory } from 'react-router';
import logPageview from 'helpers/logPageview';
import WidgetApp from 'containers/widget/WidgetApp';
import PetitionWidget from 'containers/widget/PetitionWidget';

export default (props = {}) => (
  <Router history={browserHistory} onUpdate={logPageview}>
    <Route path='/' component={WidgetApp}>
      <Route path='embed/:id' component={PetitionWidget} />
    </Route>
  </Router>
);
