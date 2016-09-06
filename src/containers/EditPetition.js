import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchPetition, publishPetition } from 'actions/PetitionActions';
import settings from 'settings';
import EditPetition from 'components/EditPetition';
import PreviewPetition from 'components/PreviewPetition';
import getPetitionForm from 'selectors/petitionForm';

const EditPetitionContainer = React.createClass({

  componentWillMount () {
    const { fetchPetition, params: { id } } = this.props;
    fetchPetition(id);
  },

  render () {
    const { petition, fetchPetition, publishPetition } = this.props;

    return (
      <div>
        <Helmet title={settings.editPetitionPage.title} />
        {petition.saved || petition.published
          ? <PreviewPetition
            petition={petition}
            fetchPetition={fetchPetition}
            publishPetition={publishPetition}
            />
          : <EditPetition petition={petition} />
        }
      </div>
    );
  }
});

export const mapStateToProps = ({ petition }) => ({
  petition: getPetitionForm(petition)
});

export const mapDispatchToProps = (dispatch) => ({
  fetchPetition: (id) => dispatch(fetchPetition(id)),
  publishPetition: (petition) => dispatch(publishPetition(petition))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPetitionContainer);
