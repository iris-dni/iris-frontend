import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPetition } from 'actions/PetitionActions';
import settings from 'settings';
import Trust from 'components/Trust';
import getPetitionForm from 'selectors/petitionForm';

const TrustSupportContainer = (props) => (
  <div>
    <Helmet title={settings.trustPage.title} />
    <Trust {...props} action={'support'} />
  </div>
);

TrustSupportContainer.fetchData = ({ store, params }) => {
  return store.dispatch(fetchPetition(params.id));
};

export const mapStateToProps = ({ petition, trust, me }) => ({
  petition: getPetitionForm(petition),
  isLoggedIn: me && !!me.id
});

TrustSupportContainer.propTypes = {
  petition: React.PropTypes.object.isRequired,
  isLoggedIn: React.PropTypes.bool.isRequired
};

export default withRouter(connect(
  mapStateToProps
)(TrustSupportContainer));
