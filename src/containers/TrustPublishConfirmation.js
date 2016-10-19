import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPetition } from 'actions/PetitionActions';
import { showFlashMessage } from 'actions/FlashActions';
import { newTrustStep } from 'actions/TrustActions';
import settings from 'settings';
import TrustConfirmation from 'components/TrustConfirmation';
import getPetitionPath from 'selectors/petitionPath';
import getPetitionForm from 'selectors/petitionForm';
import trustSubmitted from 'helpers/trustSubmitted';
import hasValidPublishUserData from 'helpers/hasValidPublishUserData';

const TrustPublishConfirmationContainer = withRouter(React.createClass({
  componentWillMount () {
    this.props.newTrustStep();

    const { router, petition } = this.props;

    // If petition is already published, redirect to petition
    if (petition.published) {
      router.push(getPetitionPath(petition));
    }

    // If there is no valid user data, redirect to publish form
    // const { router, petition, hasValidPublishUserData, showFlashMessage } = this.props;
    // if (!hasValidPublishUserData) {
    //   showFlashMessage(settings.flashMessages.invalidUserDataError, 'error');
    //   router.push(`/trust/publish/${petition.id}`);
    // }
  },

  render () {
    return (
      <div>
        <Helmet title={settings.trustConfirmationPage.title} />
        <TrustConfirmation {...this.props} action={'publish'} />
      </div>
    );
  }
}));

TrustPublishConfirmationContainer.fetchData = ({ store, params }) => {
  return store.dispatch(fetchPetition(params.id));
};

export const mapStateToProps = ({ petition, trust, me }) => ({
  me,
  petition: getPetitionForm(petition),
  trustSubmitted: trustSubmitted(petition, trust),
  isTrustedUser: trust.isTrustedUser,
  hasValidPublishUserData: hasValidPublishUserData(me)
});

export const mapDispatchToProps = (dispatch) => ({
  showFlashMessage: (message, type) => dispatch(showFlashMessage(message, type)),
  newTrustStep: () => dispatch(newTrustStep())
});

TrustPublishConfirmationContainer.propTypes = {
  me: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool
  ]).isRequired,
  petition: React.PropTypes.object.isRequired,
  trustSubmitted: React.PropTypes.bool.isRequired,
  isTrustedUser: React.PropTypes.bool.isRequired,
  hasValidPublishUserData: React.PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrustPublishConfirmationContainer);
