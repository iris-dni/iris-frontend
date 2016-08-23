import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import settings from 'settings';
import CreatePetition from 'components/CreatePetition';
import getPetitionForm from 'selectors/petitionForm';

const CreatePetitionContainer = React.createClass({
  render () {
    return (
      <div>
        <Helmet title={settings.createPetitionPageTitle} />
        <CreatePetition {...this.props} />
      </div>
    );
  }
});

CreatePetitionContainer.propTypes = {
  petition: React.PropTypes.object
};

export const mapStateToProps = ({ petition }) => ({
  petition: getPetitionForm(petition)
});

export default connect(
  mapStateToProps,
)(CreatePetitionContainer);
