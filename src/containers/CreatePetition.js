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
  petition: React.PropTypes.object,
  persisted: React.PropTypes.bool,
  published: React.PropTypes.bool
};

export const mapStateToProps = ({ petition }) => ({
  petition,
  persisted: petition && !!petition.id,
  published: petition && petition.state && petition.state.parent === 'supportable'
});

export default connect(
  mapStateToProps,
)(CreatePetitionContainer);
