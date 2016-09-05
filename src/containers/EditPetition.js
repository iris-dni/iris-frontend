import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchPetition } from 'actions/PetitionActions';
import settings from 'settings';
import EditPetition from 'components/EditPetition';
import getPetitionForm from 'selectors/petitionForm';

const EditPetitionContainer = React.createClass({

  componentWillMount () {
    const { petition } = this.props;

    if (!petition.id || !petition.id !== this.props.params.id) {
      this.props.fetchPetition(this.props.params.id);
    }
  },

  render () {
    return (
      <div>
        <Helmet title={settings.editPetitionPage.title} />
        <EditPetition {...this.props} />
      </div>
    );
  }
});

export const mapStateToProps = ({ petition }) => ({
  petition: getPetitionForm(petition)
});

export const mapDispatchToProps = (dispatch) => ({
  fetchPetition: (id) => dispatch(fetchPetition(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPetitionContainer);
