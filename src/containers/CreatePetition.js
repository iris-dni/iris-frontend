import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import settings from 'settings';
import CreatePetition from 'components/CreatePetition';

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
  formData: React.PropTypes.object
};

export const mapStateToProps = ({ petition }) => ({
  formData: petition && petition.formData
});

export default connect(
  mapStateToProps,
)(CreatePetitionContainer);
