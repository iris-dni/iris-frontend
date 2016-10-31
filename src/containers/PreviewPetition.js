import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { publishPetition } from 'actions/PetitionActions';
import settings from 'settings';
import PreviewPetition from 'components/PreviewPetition';
import getPetitionForm from 'selectors/petitionForm';

const PreviewPetitionContainer = (props) => (
  <div>
    <Helmet title={settings.previewPetitionPage.title} />
    <PreviewPetition {...props} />
  </div>
);

export const mapStateToProps = ({ petition }) => ({
  petition: getPetitionForm(petition)
});

export const mapDispatchToProps = (dispatch) => ({
  publishPetition: (petition) => dispatch(publishPetition(petition))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviewPetitionContainer);
