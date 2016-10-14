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
import getTrustPetition from 'selectors/trustPetition';
import trustSubmitted from 'helpers/trustSubmitted';

const TrustContainer = withRouter(React.createClass({
  componentWillMount () {
    this.props.newTrustStep();
    // const { router, petition, showFlashMessage } = this.props;
    // If a petition is not supportable, redirect to petition page
    // if (!petition.isSupportable) {
    //   showFlashMessage(settings.flashMessages.noLongerSupportable, 'error');
    //   router.push(getPetitionPath(petition));
    // }
  },

  componentWillUnmount () {
    this.props.newTrustStep();
  },

  componentWillUpdate (nextProps) {
    const {
      router,
      route,
      petition,
      trustSubmitted,
      isTrustedUser
    } = nextProps;

    // If we've submitted the Trust form
    if (trustSubmitted) {
      // Check our action and act accordingly
      switch (route.action) {
        case 'support':
          // Go to petition path, or confirmation
          router.push(isTrustedUser
            ? getPetitionPath(petition.id)
            : `/trust/support/${petition.id}/confirm`
          );
          break;
        case 'publish': {
          // Go to petition preview
          router.push(`/petitions/${petition.id}/preview`);
        }
      }
    }
  },

  render () {
    return (
      <div>
        <Helmet title={settings.trustPage.title} />
        <Trust {...this.props} action={this.props.route.action} />
      </div>
    );
  }
}));

TrustContainer.fetchData = ({ store, params }) => {
  return store.dispatch(fetchPetition(params.id));
};

export const mapStateToProps = ({ petition, trust, me }) => ({
  petition: getTrustPetition(petition),
  trustSubmitted: trustSubmitted(petition, trust),
  isTrustedUser: trust.isTrustedUser,
  isLoggedIn: me && !!me.id,
  me
});

export const mapDispatchToProps = (dispatch) => ({
  showFlashMessage: (message, type) => dispatch(showFlashMessage(message, type)),
  newTrustStep: () => dispatch(newTrustStep())
});

TrustContainer.propTypes = {
  petition: React.PropTypes.object.isRequired,
  trustSubmitted: React.PropTypes.bool.isRequired,
  isTrustedUser: React.PropTypes.bool.isRequired,
  isLoggedIn: React.PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrustContainer);
