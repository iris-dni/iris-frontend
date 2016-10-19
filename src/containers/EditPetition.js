import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPetition, publishPetition, updatingPetition } from 'actions/PetitionActions';
import { updateSuggestionInputValue } from 'actions/AutocompleteActions';
import citySuggestionFormatter from 'helpers/citySuggestionFormatter';
import settings from 'settings';
import EditPetition from 'components/EditPetition';
import getPetitionPath from 'selectors/petitionPath';
import getPetitionForm from 'selectors/petitionForm';

const EditPetitionContainer = withRouter(React.createClass({
  componentWillMount () {
    const { router, petition, updatingPetition, updateSuggestionInputValue } = this.props;

    // If petition is already published, redirect to petition
    if (petition.published) {
      router.push(getPetitionPath(petition));
    } else {
      updatingPetition();
      updateSuggestionInputValue(citySuggestionFormatter(petition.city));
    }
  },

  render () {
    const { petition } = this.props;

    return (
      <div>
        <Helmet title={settings.editPetitionPage.title} />
        <EditPetition petition={petition} />
      </div>
    );
  }
}));

EditPetitionContainer.fetchData = ({ store, params }) => {
  return store.dispatch(fetchPetition(params.id));
};

export const mapStateToProps = ({ petition }) => ({
  petition: getPetitionForm(petition)
});

export const mapDispatchToProps = (dispatch) => ({
  fetchPetition: (id) => dispatch(fetchPetition(id)),
  publishPetition: (petition) => dispatch(publishPetition(petition)),
  updatingPetition: () => dispatch(updatingPetition()),
  updateSuggestionInputValue: (city) => dispatch(updateSuggestionInputValue(city))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPetitionContainer);
