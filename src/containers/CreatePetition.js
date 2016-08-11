import React from 'react';
import Helmet from 'react-helmet';
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

export default CreatePetitionContainer;
