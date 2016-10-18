import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPetition } from 'actions/PetitionActions';
import { showFlashMessage } from 'actions/FlashActions';
import { newTrustStep } from 'actions/TrustActions';
import settings from 'settings';
import Trust from 'components/Trust';
import getPetitionPath from 'selectors/petitionPath';
import getPetitionForm from 'selectors/petitionForm';
import trustSubmitted from 'helpers/trustSubmitted';

const TrustContainer = withRouter(React.createClass({
  componentWillMount () {
    // const { router, petition } = this.props;

    // If a petition is not supportable, redirect to petition page
    // if (!petition.supportable) {
    //   showFlashMessage(settings.flashMessages.noLongerSupportable, 'error');
    //   router.push(getPetitionPath(petition));
    // }
  },

  componentWillUpdate (nextProps) {
    const { router, petition, trustSubmitted, isTrustedUser } = nextProps;

    // If we have submitted trust successfully
    if (trustSubmitted) {
      // Go to petition path, or confirmation
      router.push(isTrustedUser
        ? getPetitionPath(petition)
        : `/trust/support/${petition.id}/confirm`
      );
    }
  },

  componentWillUnmount () {
    this.props.newTrustStep();
  },

  render () {
    return (
      <div>
        <Helmet title={settings.trustPage.title} />
        <Trust {...this.props} action={'support'} />
      </div>
    );
  }
}));

TrustContainer.fetchData = ({ store, params }) => {
  return store.dispatch(fetchPetition(params.id));
};

export const mapStateToProps = ({ petition, trust, me }) => ({
  me,
  petition: getPetitionForm(petition),
  trustSubmitted: trustSubmitted(petition, trust),
  isTrustedUser: trust.isTrustedUser,
  isLoggedIn: me && !!me.id
});

export const mapDispatchToProps = (dispatch) => ({
  showFlashMessage: (message, type) => dispatch(showFlashMessage(message, type)),
  newTrustStep: () => dispatch(newTrustStep())
});

TrustContainer.propTypes = {
  me: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool
  ]).isRequired,
  petition: React.PropTypes.object.isRequired,
  trustSubmitted: React.PropTypes.bool.isRequired,
  isTrustedUser: React.PropTypes.bool.isRequired,
  isLoggedIn: React.PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrustContainer);
