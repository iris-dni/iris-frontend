import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App';
import Home from 'containers/Home';
import Imprint from 'containers/Imprint';
import About from 'containers/About';
import Terms from 'containers/Terms';
import LoginPage from 'containers/Login';
import Logout from 'containers/Logout';
import Petitions from 'containers/Petitions';
import NewPetition from 'containers/NewPetition';
import Petition from 'containers/Petition';
import EditPetition from 'containers/EditPetition';
import PreviewPetition from 'containers/PreviewPetition';
import TrustSupport from 'containers/TrustSupport';
import TrustSupportConfirmation from 'containers/TrustSupportConfirmation';
import TrustPublish from 'containers/TrustPublish';
import TrustPublishConfirmation from 'containers/TrustPublishConfirmation';
import RespondToPetition from 'containers/RespondToPetition';
import EmailConfirmationContainer from 'containers/EmailConfirmationContainer';
import Error404 from 'containers/Error404';
// Redirect handlers for restricting routes
import ProtectRejectedPetition from 'server/redirects/ProtectRejectedPetition';
import ProtectUnsupportablePetition from 'server/redirects/ProtectUnsupportablePetition';
import ProtectPublishedPetition from 'server/redirects/ProtectPublishedPetition';
// Restrictive higher-order components (client-side)
import RedirectIfSupported from 'containers/RedirectIfSupported';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='imprint' component={Imprint} />
    <Route path='about' component={About} />
    <Route path='terms' component={Terms} />
    <Route path='auth/login' component={LoginPage} />
    <Route path='auth/logout' component={Logout} />
    <Route path='petitions'>
      {/* Nest these 3 to support proper `activeClassName` behavior. */}
      <IndexRoute component={Petitions} />
      <Route path=':cityName-:city(/page(/:page))' component={Petitions} />
      <Route path='page/:page' component={Petitions} />
    </Route>
    <Route
      path='petitions/new'
      component={NewPetition}
    />
    <Route
      path='petitions/:id'
      onEnter={ProtectRejectedPetition}
      component={Petition}
    />
    <Route
      path='petitions/:id/edit'
      onEnter={ProtectPublishedPetition}
      component={EditPetition}
    />
    <Route
      path='petitions/:id/preview'
      onEnter={ProtectPublishedPetition}
      component={PreviewPetition}
    />
    <Route
      path='trust/publish/:id'
      onEnter={ProtectPublishedPetition}
      component={TrustPublish}
    />
    <Route
      path='trust/publish/:id/confirm'
      onEnter={ProtectPublishedPetition}
      component={TrustPublishConfirmation}
    />
    <Route
      path='trust/support/:id'
      onEnter={ProtectUnsupportablePetition}
      component={RedirectIfSupported(TrustSupport)}
    />
    <Route
      path='trust/support/:id/confirm'
      onEnter={ProtectUnsupportablePetition}
      component={RedirectIfSupported(TrustSupportConfirmation)}
    />
    <Route
      path='respond/:token'
      component={RespondToPetition}
    />
    <Route
      path='confirm/email/:action'
      component={EmailConfirmationContainer}
    />
    <Route path='*' component={Error404} status={404} />
  </Route>
);
