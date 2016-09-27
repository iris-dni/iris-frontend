import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPetitionByResponseToken, respondToPetition } from 'actions/RespondActions';
import settings from 'settings';
import Loading from 'components/Loading';
import RespondToPetition from 'components/RespondToPetition';
import getPetitionForm from 'selectors/petitionForm';
import getPetitionResponseForm from 'selectors/petitionResponseForm';
import petitionResponded from 'selectors/petitionResponded';
import getPetitionPath from 'helpers/getPetitionPath';

const RespondToPetitionContainer = withRouter(React.createClass({
  componentWillMount () {
    const {
      fetchPetitionByResponseToken,
      params: { token }
    } = this.props;

    fetchPetitionByResponseToken(token).then(({ petition }) => {
      console.log(petition);
      if (petitionResponded(petition)) {
        this.props.router.push(getPetitionPath(petition));
      }
    });
  },

  componentWillUpdate (nextProps) {
    if (nextProps.petition.saved) {
      this.props.router.push(`${getPetitionPath(nextProps.petition.id)}`);
    }
  },

  render () {
    const { petition, petitionResponse } = this.props;
    const isLoading = petition.isLoading && petitionResponse.isLoading;

    return (
      <div>
        <Helmet title={settings.editPetitionPage.title} />
        <Loading isLoading={isLoading} onServer={__SERVER__}>
          <RespondToPetition
            petition={petition}
            petitionResponse={petitionResponse}
          />
        </Loading>
      </div>
    );
  }
}));

RespondToPetitionContainer.fetchData = ({ store, params }) => {
  return store.dispatch(fetchPetitionByResponseToken(params.token));
};

export const mapStateToProps = ({ petition, petitionResponse }) => ({
  petition: getPetitionForm(petition),
  petitionResponse: getPetitionResponseForm(petitionResponse)
});

export const mapDispatchToProps = (dispatch) => ({
  fetchPetitionByResponseToken: (token) => dispatch(fetchPetitionByResponseToken(token)),
  respondToPetition: (petition) => dispatch(respondToPetition(petition))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RespondToPetitionContainer);
