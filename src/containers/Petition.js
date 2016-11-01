import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchPetition, refreshPetition } from 'actions/PetitionActions';
import Petition from 'components/Petition';
import Loading from 'components/Loading';
import getPetition from 'selectors/petition';
import getPetitionMetaData from 'helpers/getPetitionMetaData';

const PetitionContainer = React.createClass({
  componentWillMount () {
    refreshPetition(this.props.petition.id);
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
  refreshPetition: (id) => dispatch(refreshPetition(id))
});

PetitionContainer.propTypes = {
  petition: React.PropTypes.object,
  refreshPetition: React.PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetitionContainer);
