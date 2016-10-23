import React from 'react';
import { Route, Router, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';

import logPageview from 'helpers/logPageview';
import getHistory from 'helpers/getHistory';

import WidgetApp from 'containers/WidgetApp';
import PetitionWidget from 'containers/PetitionWidget';

export default (props = {}) => (
  <Router
    history={getHistory(props.store)}
    onUpdate={logPageview}
    render={applyRouterMiddleware(useScroll())}
  >
    <Route path='/' component={WidgetApp}>
      <Route path='embed/:id' component={PetitionWidget} />
    </Route>
  </Router>
);
