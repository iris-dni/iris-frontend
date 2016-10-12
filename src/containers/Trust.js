import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPetition } from 'actions/PetitionActions';
import { showFlashMessage } from 'actions/FlashActions';
import settings from 'settings';
import Trust from 'components/Trust';
import getPetitionPath from 'selectors/petitionPath';
import getTrustPetition from 'selectors/trustPetition';
import trustSubmitted from 'helpers/trustSubmitted';

const TrustContainer = withRouter(React.createClass({
  componentWillMount () {
    // const { router, petition, showFlashMessage } = this.props;
    // If a petition is not supportable, redirect to petition page
    // if (!petition.isSupportable) {
    //   showFlashMessage(settings.flashMessages.noLongerSupportable, 'error');
    //   router.push(getPetitionPath(petition));
    // }
  },

  componentWillUpdate (nextProps) {
    const { router, petition, trustSubmitted, isTrustedUser } = nextProps;
    // If we have submitted trust for the given petition
    if (trustSubmitted) {
      router.push(
        isTrustedUser
          ? getPetitionPath(petition)
          : `/trust/support/${petition.id}/confirm`
      );
    }
  },

  render () {
    return (
      <div>
        <Helmet title={settings.trustPage.title} />
        <Trust {...this.props} />
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
  showFlashMessage: (message, type) => dispatch(showFlashMessage(message, type))
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
