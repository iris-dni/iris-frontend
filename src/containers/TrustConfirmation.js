import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPetition } from 'actions/PetitionActions';
import { showFlashMessage } from 'actions/FlashActions';
import settings from 'settings';
import TrustConfirmation from 'components/TrustConfirmation';
import getPetitionPath from 'selectors/petitionPath';
import getTrustPetition from 'selectors/trustPetition';
import hasValidUserData from 'helpers/hasValidUserData';

const TrustConfirmationContainer = withRouter(React.createClass({
  componentWillMount () {
    // const { router, petition, hasValidUserData, showFlashMessage } = this.props;
    // if (!hasValidUserData) {
    //   showFlashMessage(settings.flashMessages.invalidUserDataError, 'error');
    //   router.push(`/trust/support/${petition.id}`);
    // }
  },

  componentWillUpdate (nextProps) {
    const { router, petition, trust } = nextProps;
    // If we have submitted trust successfully for the given petition
    if (petition.id === trust.petitionId && !trust.isSubmitting && trust.isTrustedUser) {
      router.push(getPetitionPath(petition));
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

export const mapStateToProps = ({ petition, trust, me }) => ({
  petition: getTrustPetition(petition),
  trust,
  hasValidUserData: hasValidUserData(me)
});

export const mapDispatchToProps = (dispatch) => ({
  showFlashMessage: (message, type) => dispatch(showFlashMessage(message, type))
});

TrustConfirmationContainer.propTypes = {
  petition: React.PropTypes.object.isRequired,
  hasValidUserData: React.PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrustConfirmationContainer);
