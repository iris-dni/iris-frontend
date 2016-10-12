import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPetition } from 'actions/PetitionActions';
import settings from 'settings';
import Trust from 'components/Trust';
import getPetitionPath from 'selectors/petitionPath';

const TrustContainer = withRouter(React.createClass({
  componentWillUpdate (nextProps) {
    const { router, petition, trust } = nextProps;
    // If we have submitted trust for the given petition
    if (petition.id === trust.petitionId && !trust.isSubmitting) {
      router.push(trust.isTrustedUser
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
  petition,
  trust,
  me,
  isLoggedIn: me && !!me.id
});

TrustContainer.propTypes = {
  petition: React.PropTypes.object.isRequired,
  trust: React.PropTypes.object.isRequired,
  isLoggedIn: React.PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps
)(TrustContainer);
