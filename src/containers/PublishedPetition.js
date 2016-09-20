import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPetition } from 'actions/PetitionActions';
import settings from 'settings';
import PublishedPetition from 'components/PublishedPetition';
import Loading from 'components/Loading';
import getPetition from 'selectors/petition';
import getPetitionPath from 'selectors/petitionPath';

const PublishedPetitionContainer = withRouter(React.createClass({
  componentWillMount () {
    const { petition } = this.props;

    if (petition && !petition.hasPublished) {
      this.props.router.push(getPetitionPath(petition));
    }
  },

  render () {
    const { petition } = this.props;

    return (
      <div>
        <Helmet title={settings.publishedPetitionPage.title} />
        <Loading isLoading={petition.isLoading} onServer={__SERVER__}>
          <PublishedPetition {...petition} />
        </Loading>
      </div>
    );
  }
}));

PublishedPetitionContainer.fetchData = ({ store, params }) => {
  return store.dispatch(fetchPetition(params.id));
};

export const mapStateToProps = ({ petition }) => ({
  petition: getPetition(petition)
});

export const mapDispatchToProps = (dispatch) => ({
  fetchPetition: (id) => dispatch(fetchPetition(id))
});

PublishedPetitionContainer.propTypes = {
  petition: React.PropTypes.object,
  fetchPetition: React.PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublishedPetitionContainer);
