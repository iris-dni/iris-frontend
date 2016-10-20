import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchPetition } from 'actions/PetitionActions';
import settings from 'settings';
import TrustConfirmation from 'components/TrustConfirmation';

const TrustPublishConfirmationContainer = (props) => (
  <div>
    <Helmet title={settings.trustConfirmationPage.title} />
    <TrustConfirmation {...props} action={'publish'} />
  </div>
);

TrustPublishConfirmationContainer.fetchData = ({ store, params }) => {
  return store.dispatch(fetchPetition(params.id));
};

export const mapStateToProps = ({ petition }) => ({
  me: petition.owner
});

TrustPublishConfirmationContainer.propTypes = {
  me: React.PropTypes.object.isRequired
};

export default connect(
  mapStateToProps
)(TrustPublishConfirmationContainer);
