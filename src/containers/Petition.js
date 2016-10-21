import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchPetition, refreshPetition } from 'actions/PetitionActions';
import { supportPetition } from 'actions/SupportActions';
import Petition from 'components/Petition';
import Loading from 'components/Loading';
import getPetition from 'selectors/petition';
import getPetitionMetaData from 'helpers/getPetitionMetaData';

const PetitionContainer = React.createClass({
  componentWillMount () {
    const {
      petition,
      fetchPetition, refreshPetition, supportPetition,
      params: { id },
      location: { query: { intent } }
    } = this.props;

    // Boolean if we have supporting a petition intent
    const isSupporting = __CLIENT__ && intent === 'support';

    // When the component gets added to the DOM,
    // fetch Petition if `id` changes (clientside),
    // or if we need to support a petition
    if (petition.id !== this.props.params.id || isSupporting) {
      fetchPetition(id).then(({ petition }) => isSupporting
        ? supportPetition(petition)
        : () => {});
    } else {
      // Otherwise, refresh the petition
      // in the background, no loading states
      refreshPetition(petition.id);
    }
  },

  render () {
    const { petition } = this.props || {};

    return (
      <div>
        <Helmet
          title={petition.browserTitle}
          meta={getPetitionMetaData(petition)}
          script={[{
            'type': 'application/ld+json',
            'innerHTML': JSON.stringify(petition.schema || {})
          }]}
        />
        <Loading isLoading={!petition.id || petition.isLoading}>
          <Petition {...petition} />
        </Loading>
      </div>
    );
  }
});

PetitionContainer.fetchData = ({ store, params }) => {
  return store.dispatch(fetchPetition(params.id));
};

export const mapStateToProps = ({ petition }) => ({
  petition: getPetition(petition)
});

export const mapDispatchToProps = (dispatch) => ({
  fetchPetition: (id) => dispatch(fetchPetition(id)),
  refreshPetition: (id) => dispatch(refreshPetition(id)),
  supportPetition: (petition) => dispatch(supportPetition(petition))
});

PetitionContainer.propTypes = {
  petition: React.PropTypes.object,
  fetchPetition: React.PropTypes.func,
  supportPetition: React.PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetitionContainer);
