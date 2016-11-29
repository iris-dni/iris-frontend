import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchPetitionByResponseToken, respondToPetition } from 'actions/RespondActions';
import settings from 'settings';
import RespondToPetition from 'components/RespondToPetition';
import PetitionResponseTokenError from 'components/PetitionResponseTokenError';
import getPetitionForm from 'selectors/petitionForm';
import getPetitionResponseForm from 'selectors/petitionResponseForm';

const RespondToPetitionContainer = React.createClass({
  render () {
    const { petition, petitionResponse } = this.props;

    return (
      <div>
        <Helmet title={settings.respondToPetitionPage.title} />
        {!!petition.found &&
          <RespondToPetition
            petition={petition}
            petitionResponse={petitionResponse}
          />
        }
        {!petition.found &&
          <PetitionResponseTokenError
            petition={petition}
            petitionResponse={petitionResponse}
          />
        }
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
  fetchPetitionByResponseToken: (token) => dispatch(fetchPetitionByResponseToken(token)),
  respondToPetition: (petition) => dispatch(respondToPetition(petition))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RespondToPetitionContainer);
