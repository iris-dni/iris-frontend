import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { clearPetition, publishPetition } from 'actions/PetitionActions';
import settings from 'settings';
import NewPetition from 'components/NewPetition';
import PreviewPetition from 'components/PreviewPetition';
import getPetitionForm from 'selectors/petitionForm';

const NewPetitionContainer = React.createClass({
  componentWillMount () {
    const { clearPetition } = this.props;
    clearPetition();
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
});

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
