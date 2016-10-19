import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { clearPetition } from 'actions/PetitionActions';
import { clearSuggestionInputValue } from 'actions/AutocompleteActions';
import settings from 'settings';
import NewPetition from 'components/NewPetition';
import getPetitionForm from 'selectors/petitionForm';

const NewPetitionContainer = React.createClass({
  componentWillMount () {
    this.props.clearPetition();
    this.props.clearSuggestionInputValue();
  },

  render () {
    return (
      <div>
        <Helmet title={settings.newPetitionPage.title} />
        <NewPetition petition={this.props.petition} />
      </div>
    );
  }
});

export const mapStateToProps = ({ petition }) => ({
  petition: getPetitionForm(petition)
});

export const mapDispatchToProps = (dispatch) => ({
  clearPetition: () => dispatch(clearPetition()),
  clearSuggestionInputValue: () => dispatch(clearSuggestionInputValue())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPetitionContainer);
