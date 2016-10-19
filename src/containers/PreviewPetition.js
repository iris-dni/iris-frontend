import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPetition, publishPetition } from 'actions/PetitionActions';
import settings from 'settings';
import PreviewPetition from 'components/PreviewPetition';
import getPetitionPath from 'selectors/petitionPath';
import getPetitionForm from 'selectors/petitionForm';
import trustSubmitted from 'helpers/trustSubmitted';

const PreviewPetitionContainer = withRouter(React.createClass({
  componentWillUpdate (nextProps) {
    const { router, petition, trustSubmitted, isTrustedUser } = nextProps;

    if (trustSubmitted) {
      // Go to petition path, or confirmation
      router.push(isTrustedUser
        ? getPetitionPath(petition.id)
        : `/trust/publish/${petition.id}/confirm`
      );
    }

    // if (nextProps.petition.hasPublished) {
    //   this.props.router.push(`${getPetitionPath(nextProps.petition)}/published`);
    // }
  },

  render () {
    return (
      <div>
        <Helmet title={settings.editPetitionPage.title} />
        <PreviewPetition {...this.props} />
      </div>
    );
  }
}));

PreviewPetitionContainer.fetchData = ({ store, params }) => {
  return store.dispatch(fetchPetition(params.id));
};

export const mapStateToProps = ({ petition, trust, me }) => ({
  petition: getPetitionForm(petition),
  trustSubmitted: trustSubmitted(petition, trust),
  isTrustedUser: trust.isTrustedUser,
  isLoggedIn: me && !!me.id,
  me
});

export const mapDispatchToProps = (dispatch) => ({
  publishPetition: (petition) => dispatch(publishPetition(petition))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviewPetitionContainer);
