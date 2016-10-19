import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPetition, publishPetition } from 'actions/PetitionActions';
import { updateSuggestionInputValue } from 'actions/AutocompleteActions';
import citySuggestionFormatter from 'helpers/citySuggestionFormatter';
import settings from 'settings';
// import Loading from 'components/Loading';
import EditPetition from 'components/EditPetition';
// import PreviewPetition from 'components/PreviewPetition';
import getPetitionPath from 'selectors/petitionPath';
import getPetitionForm from 'selectors/petitionForm';
// import petitionPublished from 'selectors/petitionPublished';

const EditPetitionContainer = withRouter(React.createClass({
  componentWillMount () {
    const { router, petition } = this.props;

    // If petition is already published, redirect to petition
    if (petition.published) {
      router.push(getPetitionPath(petition));
    }

    this.props.updateSuggestionInputValue(this.props.cityValue);
  },

  componentWillUpdate (nextProps) {
    // console.log('update', nextProps.petition.links);

    // if (nextProps.petition.hasPublished) {
    //   this.props.router.push(`${getPetitionPath(nextProps.petition)}/published`);
    // }
  },

  render () {
    const { petition } = this.props;

    return (
      <div>
        <Helmet title={settings.editPetitionPage.title} />
        <EditPetition
          petition={petition}
        />
      </div>
    );
  }
}));

EditPetitionContainer.fetchData = ({ store, params }) => {
  return store.dispatch(fetchPetition(params.id));
};

export const mapStateToProps = ({ petition }) => ({
  petition: getPetitionForm(petition),
  cityValue: citySuggestionFormatter(petition.city && petition.city.data || {})
});

export const mapDispatchToProps = (dispatch) => ({
  fetchPetition: (id) => dispatch(fetchPetition(id)),
  publishPetition: (petition) => dispatch(publishPetition(petition)),
  updateSuggestionInputValue: (city) => dispatch(updateSuggestionInputValue(city))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPetitionContainer);
