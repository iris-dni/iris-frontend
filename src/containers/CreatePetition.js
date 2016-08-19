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
  createdPetition: React.PropTypes.number
};

export const mapStateToProps = ({ petition }) => ({
  createdPetition: petition && petition.createdPetition
});

export default connect(
  mapStateToProps,
)(CreatePetitionContainer);
