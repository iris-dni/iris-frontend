import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchPetition, updatingPetition } from 'actions/PetitionActions';
import { updateSuggestionInputValue } from 'actions/AutocompleteActions';
import settings from 'settings';
import citySuggestionFormatter from 'helpers/citySuggestionFormatter';
import EditPetition from 'components/EditPetition';
import getPetitionForm from 'selectors/petitionForm';

const EditPetitionContainer = React.createClass({
  componentWillMount () {
    this.props.updatingPetition();
    this.props.updateSuggestionInputValue(
      citySuggestionFormatter(this.props.petition.city)
    );
  },

  render () {
    return (
      <div>
        <Helmet title={settings.editPetitionPage.title} />
        <EditPetition petition={this.props.petition} />
      </div>
    );
  }
});

EditPetitionContainer.fetchData = ({ store, params }) => {
  return store.dispatch(fetchPetition(params.id));
};

export const mapStateToProps = ({ petition }) => ({
  petition: getPetitionForm(petition)
});

export const mapDispatchToProps = (dispatch) => ({
  updatingPetition: () => dispatch(updatingPetition()),
  updateSuggestionInputValue: (city) => dispatch(updateSuggestionInputValue(city))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPetitionContainer);
