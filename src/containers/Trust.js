import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPetition } from 'actions/PetitionActions';
import settings from 'settings';
import Trust from 'components/Trust';

const TrustContainer = withRouter((props) => (
  <div>
    <Helmet title={settings.trustPage.title} />
    <Trust {...props} />
  </div>
));

TrustContainer.fetchData = ({ store, params }) => {
  return store.dispatch(fetchPetition(params.id));
};

export const mapStateToProps = ({ me, petition }) => ({
  petition,
  isLoggedIn: me && !!me.id
});

TrustContainer.propTypes = {
  isLoggedIn: React.PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps
)(TrustContainer);
