import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchPetition } from 'actions/PetitionActions';
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

PetitionWidgetContainer.propTypes = {
  petition: React.PropTypes.object
};

export default connect(
  mapStateToProps
)(PetitionWidgetContainer);
