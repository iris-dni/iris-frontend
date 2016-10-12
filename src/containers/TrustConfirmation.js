import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPetition } from 'actions/PetitionActions';
import settings from 'settings';
import TrustConfirmation from 'components/TrustConfirmation';

const TrustConfirmationContainer = withRouter(React.createClass({
  componentWillMount () {
    const { router, petition, hasValidMeData } = this.props;
    if (!hasValidMeData) {
      router.push(`/trust/support/${petition.id}`);
    }
  },

  render () {
    return (
      <div>
        <Helmet title={settings.trustConfirmationPage.title} />
        <TrustConfirmation {...this.props} />
      </div>
    );
  }
}));

TrustConfirmationContainer.fetchData = ({ store, params }) => {
  return store.dispatch(fetchPetition(params.id));
};

const hasValidMeData = (me) => {
  return me && !!me.mobile && !!me.firstname && !!me.lastname && !!me.zip;
};

export const mapStateToProps = ({ me, petition, trust }) => ({
  petition,
  hasValidMeData: hasValidMeData(me)
});

TrustConfirmationContainer.propTypes = {
  petition: React.PropTypes.object.isRequired,
  hasValidMeData: React.PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps
)(TrustConfirmationContainer);
