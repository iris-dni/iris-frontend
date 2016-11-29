import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import settings from 'settings';
import RespondedToPetition from 'components/RespondedToPetition';

const RespondToPetitionConfirmationContainer = React.createClass({
  render () {
    return (
      <div>
        <Helmet title={settings.respondToPetitionPage.title} />
        <RespondedToPetition />
      </div>
    );
  }
});

export default connect(
  null,
  null
)(RespondToPetitionConfirmationContainer);
