import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import settings from 'settings';
import CreatePetition from 'components/CreatePetition';
import PublishedPetition from 'components/PublishedPetition';
import getPetitionForm from 'selectors/petitionForm';

const CreatePetitionContainer = (props) => (
  <div>
    <Helmet title={settings.createPetitionPageTitle} />
    {props.petition.published
      ? <PublishedPetition {...props} />
      : <CreatePetition {...props} />
    }
  </div>
);

CreatePetitionContainer.propTypes = {
  petition: React.PropTypes.object
};

export const mapStateToProps = ({ petition }) => ({
  petition: getPetitionForm(petition)
});

export default connect(
  mapStateToProps,
)(CreatePetitionContainer);
