import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchPetition } from 'actions/PetitionActions';
import PetitionWidget from 'widgets/components/PetitionWidget';
import getPetitionWidget from 'widgets/selectors/petitionWidget';

const PetitionWidgetContainer = (props) => (
  <div>
    <Helmet title={props.title} />
    <PetitionWidget{...props} />
  </div>
);

PetitionWidgetContainer.fetchData = ({ store, params }) => {
  return store.dispatch(fetchPetition(params.id));
};

export const mapStateToProps = ({ petition }) => getPetitionWidget(petition);

PetitionWidgetContainer.propTypes = {
  id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
  byline: React.PropTypes.string.isRequired,
  stats: React.PropTypes.object.isRequired,
  progress: React.PropTypes.object.isRequired
};

export default connect(
  mapStateToProps
)(PetitionWidgetContainer);
