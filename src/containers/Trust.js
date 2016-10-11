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
    const { petition, router } = nextProps;
    if (petition.hasSupported) {
      router.push(`${getPetitionPath(petition)}`);
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
