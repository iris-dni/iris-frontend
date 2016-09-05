import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import settings from 'settings';
import NewPetition from 'components/NewPetition';
import getPetitionForm from 'selectors/petitionForm';

const NewPetitionContainer = React.createClass({

  render () {
    console.log(this.props);
    return (
      <div>
        <Helmet title={settings.newPetitionPage.title} />
        <NewPetition {...this.props} />
      </div>
    );
  }
});

export const mapStateToProps = () => ({
  petition: getPetitionForm()
});

export default connect(
  mapStateToProps,
)(NewPetitionContainer);
