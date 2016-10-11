import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPetition } from 'actions/PetitionActions';
import settings from 'settings';
import Trust from 'components/Trust';
import getPetitionPath from 'selectors/petitionPath';
import getTrustParams from 'selectors/trustParams';

const TrustContainer = withRouter(React.createClass({
  componentWillUpdate (nextProps) {
    const {
      router,
      petition,
      trustId,
      isTrustedUser
    } = nextProps;
    // If we have submitted trust for the given petition
    if (trustId === petition.id) {
      router.push(isTrustedUser
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

export const mapStateToProps = ({ me, petition, trust }) => ({
  petition,
  isLoggedIn: me && !!me.id,
  ...getTrustParams(trust)
});

TrustContainer.propTypes = {
  petition: React.PropTypes.object.isRequired,
  isLoggedIn: React.PropTypes.bool.isRequired,
  isTrustedUser: React.PropTypes.bool.isRequired,
  trustId: React.PropTypes.string
};

export default connect(
  mapStateToProps
)(TrustContainer);
