import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPetition, publishPetition } from 'actions/PetitionActions';
import settings from 'settings';
import EditPetition from 'components/EditPetition';
import PreviewPetition from 'components/PreviewPetition';
import getPetitionPath from 'helpers/getPetitionPath';
import getPetitionForm from 'selectors/petitionForm';
import petitionPublished from 'selectors/petitionPublished';

const EditPetitionContainer = withRouter(React.createClass({
  componentWillMount () {
    const {
      fetchPetition,
      publishPetition,
      params: { id },
      location: { query: { intent } }
    } = this.props;

    fetchPetition(id).then(({ petition }) => {
      if (petitionPublished(petition)) {
        this.props.router.push(getPetitionPath(petition));
      }

      if (__CLIENT__ && intent === 'publish') {
        publishPetition(petition);
      }
    });
  },

  componentWillUpdate (nextProps) {
    if (petitionPublished(nextProps.petition)) {
      this.props.router.push(getPetitionPath(nextProps.petition));
    }
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
}));

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
