import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPetition } from 'actions/PetitionActions';
import settings from 'settings';
import Trust from 'components/Trust';
import getPetitionPath from 'selectors/petitionPath';
import getPetitionForm from 'selectors/petitionForm';
import trustSubmitted from 'helpers/trustSubmitted';

const TrustPublishContainer = withRouter(React.createClass({
  componentWillMount () {
    const { router, petition } = this.props;

    // If petition is already published, redirect to petition
    if (petition.published) {
      router.push(getPetitionPath(petition));
    }
  },

  render () {
    return (
      <div>
        <Helmet title={settings.trustPage.title} />
        <Trust {...this.props} action={'publish'} />
      </div>
    );
  }
}));

TrustPublishContainer.fetchData = ({ store, params }) => {
  return store.dispatch(fetchPetition(params.id));
};

export const mapStateToProps = ({ petition, trust, me }) => ({
  petition: getPetitionForm(petition),
  trustSubmitted: trustSubmitted(petition, trust),
  isLoggedIn: me && !!me.id
});

TrustPublishContainer.propTypes = {
  petition: React.PropTypes.object.isRequired,
  trustSubmitted: React.PropTypes.bool.isRequired,
  isLoggedIn: React.PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps
)(TrustPublishContainer);
