import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { clearPetition, publishPetition } from 'actions/PetitionActions';
import settings from 'settings';
import NewPetition from 'components/NewPetition';
import PreviewPetition from 'components/PreviewPetition';
import getPetitionPath from 'selectors/petitionPath';
import getPetitionForm from 'selectors/petitionForm';
import petitionPublished from 'selectors/petitionPublished';

const NewPetitionContainer = withRouter(React.createClass({
  componentWillMount () {
    const { clearPetition } = this.props;
    clearPetition();
  },

  componentWillUpdate (nextProps) {
    if (petitionPublished(nextProps.petition)) {
      this.props.router.push(`${getPetitionPath(nextProps.petition)}/published`);
    }
  },

  render () {
    const { petition, publishPetition } = this.props;

    return (
      <div>
        <Helmet title={settings.newPetitionPage.title} />
        {petition.saved
          ? <PreviewPetition
            petition={petition}
            publishPetition={publishPetition}
            />
          : <NewPetition petition={petition} />
        }
      </div>
    );
  }
}));

export const mapStateToProps = ({ petition }) => ({
  petition: getPetitionForm(petition)
});

const mapDispatchToProps = (dispatch) => ({
  clearPetition: () => dispatch(clearPetition()),
  publishPetition: (petition) => dispatch(publishPetition(petition))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPetitionContainer);
