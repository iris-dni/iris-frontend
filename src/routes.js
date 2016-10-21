import React from 'react';
import { Route, IndexRoute, Router, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';

import logPageview from 'helpers/logPageview';
import getHistory from 'helpers/getHistory';

import App from 'containers/App';
import Home from 'containers/Home';
import LoginPage from 'containers/Login';
import Logout from 'containers/Logout';
import Petition from 'containers/Petition';
import Petitions from 'containers/Petitions';
import NewPetition from 'containers/NewPetition';
import EditPetition from 'containers/EditPetition';
import PreviewPetition from 'containers/PreviewPetition';
import RespondToPetition from 'containers/RespondToPetition';
import Imprint from 'components/Imprint';
import TrustSupport from 'containers/TrustSupport';
import TrustSupportConfirmation from 'containers/TrustSupportConfirmation';
import TrustPublish from 'containers/TrustPublish';
import TrustPublishConfirmation from 'containers/TrustPublishConfirmation';
import RedirectIfPublished from 'containers/RedirectIfPublished';

export default (props = {}) => (
  <Router
    history={getHistory(props.store)}
    onUpdate={logPageview}
    render={applyRouterMiddleware(useScroll())}
  >
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='imprint' component={Imprint} />
      <Route path='auth/login' component={LoginPage} />
      <Route path='auth/logout' component={Logout} />
      <Route path='petitions'>
        {/* Nest these 3 to support proper `activeClassName` behavior. */}
        <IndexRoute component={Petitions} />
        <Route path=':cityName-:city(/page(/:page))' component={Petitions} />
        <Route path='page/:page' component={Petitions} />
      </Route>
      <Route path='petitions/new' component={NewPetition} />
      <Route path='petitions/:id' component={Petition} />
      <Route path='petitions/:id/edit' component={RedirectIfPublished(EditPetition)} />
      <Route path='petitions/:id/preview' component={RedirectIfPublished(PreviewPetition)} />
      <Route path='respond/:token' component={RespondToPetition} />
      <Route path='trust/support/:id' component={TrustSupport} />
      <Route path='trust/support/:id/confirm' component={TrustSupportConfirmation} />
      <Route path='trust/publish/:id' component={RedirectIfPublished(TrustPublish)} />
      <Route path='trust/publish/:id/confirm' component={RedirectIfPublished(TrustPublishConfirmation)} />
    </Route>
  </Router>
);
