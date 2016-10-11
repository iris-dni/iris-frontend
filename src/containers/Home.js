import React from 'react';
import settings from 'settings';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchPetitions, clearPetitions } from 'actions/PetitionsActions';
import Home from 'components/Home';
import getPetitions from 'selectors/petitions';
import getPetitionsHomeQuery from 'selectors/petitionsHomeQuery';

const HOME_QUERY = getPetitionsHomeQuery({ limit: 3 });

const HomeContainer = withRouter(React.createClass({

  componentWillMount () {
    // If there are no petitions, or if the user arrived on the page by clicking
    // a client-side router link, then we fetch petitions client-side.
    if (!this.props.petitions.length ||
        this.props.location.action === 'PUSH' ||
        this.props.location.action === 'REPLACE') {
      const location = Object.assign({}, this.props.location, HOME_QUERY);

      this.props.clearPetitions();
      this.props.fetchPetitions({ location });
    }
  },

  render () {
    return (
      <div>
        <Helmet title={this.props.title} />
        <Home {...this.props} />
      </div>
    );
  }
}));

HomeContainer.fetchData = (props) => {
  const { store } = props;
  const location = Object.assign({}, props.location, HOME_QUERY);

  return store.dispatch(fetchPetitions({ location }));
};

HomeContainer.propTypes = {
  petitions: React.PropTypes.array
};

export const mapDispatchToProps = (dispatch) => ({
  fetchPetitions: (options) => dispatch(fetchPetitions(options)),
  clearPetitions: () => dispatch(clearPetitions())
});

export const mapStateToProps = ({ petitions }) => ({
  petitions: getPetitions(petitions.data || []),
  title: settings.homePage.title
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
