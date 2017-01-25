import React from 'react';
import { Route } from 'react-router';
import WidgetApp from 'widgets/containers/WidgetApp';
import PetitionWidget from 'widgets/containers/PetitionWidget';

export default (
  <Route path='/' component={WidgetApp}>
    <Route path='embed/:id' component={PetitionWidget} />
  </Route>
);
