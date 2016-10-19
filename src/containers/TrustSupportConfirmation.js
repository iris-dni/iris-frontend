import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPetition } from 'actions/PetitionActions';
import settings from 'settings';
import TrustConfirmation from 'components/TrustConfirmation';
import getPetitionForm from 'selectors/petitionForm';

const TrustSupportConfirmationContainer = withRouter(React.createClass({
  render () {
    return (
      <div>
        <Helmet title={settings.trustConfirmationPage.title} />
        <TrustConfirmation {...this.props} action={'support'} />
      </div>
    );
  }
}));

TrustSupportConfirmationContainer.fetchData = ({ store, params }) => {
  return store.dispatch(fetchPetition(params.id));
};

export const mapStateToProps = ({ petition, trust, me }) => ({
  me,
  petition: getPetitionForm(petition)
});

TrustSupportConfirmationContainer.propTypes = {
  me: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool
  ]).isRequired,
  petition: React.PropTypes.object.isRequired
};

export default connect(
  mapStateToProps
)(TrustSupportConfirmationContainer);
