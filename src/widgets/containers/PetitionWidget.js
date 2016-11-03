import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchPetition } from 'actions/PetitionActions';
import getPetitionSchema from 'selectors/petitionSchema';
import getPetitionMetaData from 'helpers/getPetitionMetaData';
import PetitionWidget from 'widgets/components/PetitionWidget';
import getPetitionWidget from 'widgets/selectors/petitionWidget';

const PetitionWidgetContainer = ({ petition, widget }) => (
  <div>
    <Helmet
      title={petition.title}
      meta={petition.meta}
      script={[{
        'type': 'application/ld+json',
        'innerHTML': JSON.stringify(petition.schema || {})
      }]}
    />
    <PetitionWidget {...widget} />
  </div>
);

PetitionWidgetContainer.fetchData = ({ store, params }) => {
  return store.dispatch(fetchPetition(params.id));
};

export const mapStateToProps = ({ petition }) => ({
  petition: {
    title: petition.title,
    meta: getPetitionMetaData(petition),
    schema: getPetitionSchema(petition)
  },
  widget: getPetitionWidget(petition)
});

PetitionWidgetContainer.propTypes = {
  petition: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    meta: React.PropTypes.array.isRequired,
    schema: React.PropTypes.object.isRequired
  }),
  widget: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired,
    byline: React.PropTypes.string.isRequired,
    image: React.PropTypes.object,
    stats: React.PropTypes.object.isRequired,
    progress: React.PropTypes.object.isRequired,
    tags: React.PropTypes.object.isRequired
  })
};

export default connect(
  mapStateToProps
)(PetitionWidgetContainer);
