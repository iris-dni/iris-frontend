import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { clearPetition } from 'actions/PetitionActions';
import { clearSuggestionInputValue } from 'actions/AutocompleteActions';
import settings from 'settings';
import NewPetition from 'components/NewPetition';
import getPetitionForm from 'selectors/petitionForm';

const NewPetitionContainer = withRouter(React.createClass({
  componentWillMount () {
    this.props.clearPetition();
    this.props.clearSuggestionInputValue();
  },

  componentWillUpdate (nextProps) {
    const { petition, router } = nextProps;

    // If petition has saved, go to the trust page
    if (petition.persisted) {
      router.push(`/trust/publish/${petition.id}`);
    }
  },

  render () {
    return (
      <div>
        <Helmet title={settings.newPetitionPage.title} />
        <NewPetition petition={this.props.petition} />
      </div>
    );
  }
}));

export const mapStateToProps = ({ petition }) => ({
  petition: getPetitionForm(petition)
});

const mapDispatchToProps = (dispatch) => ({
  clearPetition: () => dispatch(clearPetition()),
  clearSuggestionInputValue: () => dispatch(clearSuggestionInputValue())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPetitionContainer);
