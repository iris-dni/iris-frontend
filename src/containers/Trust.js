import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import settings from 'settings';
import Trust from 'components/Trust';

const TrustContainer = withRouter(React.createClass({
  componentWillMount () {
  },

  componentWillUpdate (nextProps) {
  },

  componentWillUnmount () {
  },

  render () {
    return (
      <div>
        <Helmet title={settings.trustPage.title} />
        <Trust />
      </div>
    );
  }
}));

export const mapStateToProps = ({ petition }) => ({});

// const mapDispatchToProps = (dispatch) => ({
//   clearPetition: () => dispatch(clearPetition()),
//   clearSuggestionInputValue: () => dispatch(clearSuggestionInputValue()),
//   publishPetition: (petition) => dispatch(publishPetition(petition))
// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(TrustContainer);
