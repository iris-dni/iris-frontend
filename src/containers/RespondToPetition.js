import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchPetitionByResponseToken } from 'actions/RespondActions';
import settings from 'settings';
import Loading from 'components/Loading';
import RespondToPetition from 'components/RespondToPetition';
import PetitionResponseTokenError from 'components/PetitionResponseTokenError';
import RespondedToPetition from 'components/RespondedToPetition';
import getPetitionForm from 'selectors/petitionForm';
import getPetitionResponseForm from 'selectors/petitionResponseForm';

const RespondToPetitionContainer = React.createClass({
  componentWillMount () {
    const { petition, fetchPetitionByResponseToken, params } = this.props;

    if (!!petition.found && !petition.id) {
      fetchPetitionByResponseToken(params.token);
    }
  },

  render () {
    const { petition, petitionResponse } = this.props;

    return (
      <div>
        <Helmet title={settings.respondToPetitionPage.title} />
        <Loading isLoading={petition.isLoading || petitionResponse.isLoading}>
          <div>
            {!!petition.found && !petitionResponse.saved && !petition.hasCityAnswerAlreadySubmitted &&
              <RespondToPetition
                petition={petition}
                petitionResponse={petitionResponse}
              />
            }

            {!!petition.found && !!petitionResponse.saved && !petition.hasCityAnswerAlreadySubmitted &&
              <RespondedToPetition />
            }

            {(!petition.found || !!petition.found && !!petition.hasCityAnswerAlreadySubmitted) &&
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
});

RespondToPetitionContainer.fetchData = ({ store, params }) => {
  return store.dispatch(fetchPetitionByResponseToken(params.token));
};

export const mapStateToProps = ({ petition, petitionResponse }) => ({
  petition: getPetitionForm(petition),
  petitionResponse: getPetitionResponseForm(petitionResponse)
});

export const mapDispatchToProps = (dispatch) => ({
  fetchPetitionByResponseToken: (token) => dispatch(fetchPetitionByResponseToken(token))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RespondToPetitionContainer));
