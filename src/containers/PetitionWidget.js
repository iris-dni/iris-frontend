import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchPetition, refreshPetition } from 'actions/PetitionActions';
import PetitionWidget from 'components/PetitionWidget';
import getPetition from 'selectors/petition';
import getPetitionMetaData from 'helpers/getPetitionMetaData';

const PetitionWidgetContainer = ({ petition }) => (
  <div>
    <Helmet
      title={petition.browserTitle}
      meta={getPetitionMetaData(petition)}
      script={[{
        'type': 'application/ld+json',
        'innerHTML': JSON.stringify(petition.schema || {})
      }]}
    />
    <PetitionWidget {...petition} />
  </div>
);

PetitionWidgetContainer.fetchData = ({ store, params }) => {
  return store.dispatch(fetchPetition(params.id));
};

export const mapStateToProps = ({ petition }) => ({
  petition: getPetition(petition)
});

export const mapDispatchToProps = (dispatch) => ({
  fetchPetition: (id) => dispatch(fetchPetition(id)),
  refreshPetition: (id) => dispatch(refreshPetition(id))
});

PetitionWidgetContainer.propTypes = {
  petition: React.PropTypes.object,
  fetchPetition: React.PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetitionWidgetContainer);
