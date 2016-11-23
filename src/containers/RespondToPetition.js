import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPetitionByResponseToken, respondToPetition } from 'actions/RespondActions';
import settings from 'settings';
import Loading from 'components/Loading';
import RespondToPetition from 'components/RespondToPetition';
import PetitionResponseTokenError from 'components/PetitionResponseTokenError';
import RespondedToPetition from 'components/RespondedToPetition';
import getPetitionForm from 'selectors/petitionForm';
import getPetitionResponseForm from 'selectors/petitionResponseForm';

const RespondToPetitionContainer = withRouter(React.createClass({
  componentWillMount () {
    const {
      petitionResponse, fetchPetitionByResponseToken,
      params: { token }
    } = this.props;

    if (!petitionResponse.saved) {
      fetchPetitionByResponseToken(token);
    }
  },

  render () {
    const { petition, petitionResponse } = this.props;
    const isLoading = petition.isLoading && petitionResponse.isLoading;

    return (
      <div>
        <Helmet title={settings.respondToPetitionPage.title} />
        <Loading isLoading={isLoading} onServer={__SERVER__}>
          <div>
            {petitionResponse.saved &&
              <RespondedToPetition
                petition={petition}
                petitionResponse={petitionResponse}
              />
            }

            {!petition.saved && petition.found &&
              <RespondToPetition
                petition={petition}
                petitionResponse={petitionResponse}
              />
            }

            {!petition.saved && !petition.found &&
              <PetitionResponseTokenError
                petition={petition}
                petitionResponse={petitionResponse}
              />
            }
          </div>
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
