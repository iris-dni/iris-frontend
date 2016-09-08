import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchPetition, supportPetition } from 'actions/PetitionActions';
import Petition from 'components/Petition';
import Loading from 'components/Loading';
import getPetition from 'selectors/petition';

const PetitionContainer = React.createClass({
  componentWillMount () {
    const {
      petition,
      fetchPetition,
      supportPetition,
      params: { id },
      location: { query: { intent } }
    } = this.props;

    // When the component gets added to the DOM,
    // fetch Petition if `id` changes (clientside)
    if (petition.id !== this.props.params.id) {
      fetchPetition(id).then(({ petition }) => {
        // If we have the `support` intent, support the petition
        if (__CLIENT__ && intent === 'support') {
          supportPetition(petition);
        }
      });
    }
  },

  render () {
    const { petition } = this.props;

    return (
      <div>
        <Helmet
          title={petition.browserTitle}
          script={[{
            'type': 'application/ld+json',
            'innerHTML': JSON.stringify(petition.schema || {})
          }]}
        />
        <Loading isLoading={petition.isLoading}>
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

// Add dispatchers to the component props,
// for fetching the data _client side_
export const mapDispatchToProps = (dispatch) => ({
  fetchPetition: (id) => dispatch(fetchPetition(id)),
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
