import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPetition } from 'actions/PetitionActions';
import { showFlashMessage } from 'actions/FlashActions';
import settings from 'settings';
import TrustConfirmation from 'components/TrustConfirmation';
import getPetitionPath from 'selectors/petitionPath';
import getPetitionForm from 'selectors/petitionForm';
import trustSubmitted from 'helpers/trustSubmitted';
import hasValidUserData from 'helpers/hasValidUserData';

const TrustSupportConfirmationContainer = withRouter(React.createClass({
  componentWillMount () {
    // const { router, petition, hasValidUserData, showFlashMessage } = this.props;

    // If there is no valid user data, redirect to support form
    // if (!hasValidUserData) {
    //   showFlashMessage(settings.flashMessages.invalidUserDataError, 'error');
    //   router.push(`/trust/support/${petition.id}`);
    // }
  },

  componentWillUpdate (nextProps) {
    const { router, petition, trustSubmitted, isTrustedUser } = nextProps;

    // If we have submitted trust successfully
    if (trustSubmitted && isTrustedUser) {
      router.push(getPetitionPath(petition));
    }
  },

  render () {
    return (
      <div>
        <Helmet title={settings.trustConfirmationPage.title} />
        <TrustConfirmation {...this.props} action={'support'} />
      </div>
    );
  }
}));

TrustSupportConfirmationContainer.fetchData = ({ store, params }) => {
  return store.dispatch(fetchPetition(params.id));
};

export const mapStateToProps = ({ petition, trust, me }) => ({
  me,
  petition: getPetitionForm(petition),
  trustSubmitted: trustSubmitted(petition, trust),
  isTrustedUser: trust.isTrustedUser,
  hasValidUserData: hasValidUserData(me)
});

export const mapDispatchToProps = (dispatch) => ({
  showFlashMessage: (message, type) => dispatch(showFlashMessage(message, type))
});

TrustSupportConfirmationContainer.propTypes = {
  me: React.PropTypes.object.isRequired,
  petition: React.PropTypes.object.isRequired,
  trustSubmitted: React.PropTypes.bool.isRequired,
  isTrustedUser: React.PropTypes.bool.isRequired,
  hasValidUserData: React.PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrustSupportConfirmationContainer);