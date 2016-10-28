import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchPetition } from 'actions/PetitionActions';
import PetitionWidget from 'widgets/components/PetitionWidget';
import getPetitionMetrics from 'selectors/petitionMetrics';
import getPetitionInfo from 'selectors/petitionInfo';
import getPetitionProgress from 'selectors/petitionProgress';

const PetitionWidgetContainer = (props) => (
  <div>
    <Helmet title={props.title} />
    <PetitionWidget{...props} />
  </div>
);

PetitionWidgetContainer.fetchData = ({ store, params }) => {
  return store.dispatch(fetchPetition(params.id));
};

export const mapStateToProps = ({ petition }) => ({
  id: petition.id,
  title: petition.title,
  info: getPetitionInfo(petition),
  stats: getPetitionMetrics(petition),
  progress: getPetitionProgress(petition)
});

PetitionWidgetContainer.propTypes = {
  id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  stats: React.PropTypes.object.isRequired,
  progress: React.PropTypes.object.isRequired
};

export default connect(
  mapStateToProps
)(PetitionWidgetContainer);
