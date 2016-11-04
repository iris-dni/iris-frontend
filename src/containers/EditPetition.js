import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPetition } from 'actions/PetitionActions';
import { updateSuggestionInputValue } from 'actions/AutocompleteActions';
import settings from 'settings';
import citySuggestionFormatter from 'helpers/citySuggestionFormatter';
import EditPetition from 'components/EditPetition';
import getPetitionForm from 'selectors/petitionForm';

const EditPetitionContainer = React.createClass({
  componentWillMount () {
    const { petition, params, fetchPetition, updateSuggestionInputValue } = this.props;

    if (!petition.id) {
      fetchPetition(params.id)
        .then(({ petition }) => {
          updateSuggestionInputValue(
            citySuggestionFormatter(petition.city.data)
          );
        });
    } else {
      updateSuggestionInputValue(
        citySuggestionFormatter(this.props.petition.city)
      );
    }
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

export const mapStateToProps = ({ petition }) => ({
  petition: getPetitionForm(petition)
});

export const mapDispatchToProps = (dispatch) => ({
  fetchPetition: (id) => dispatch(fetchPetition(id)),
  updateSuggestionInputValue: (city) => dispatch(updateSuggestionInputValue(city))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPetitionContainer));
