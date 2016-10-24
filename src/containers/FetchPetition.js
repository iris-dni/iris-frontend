import React from 'react';
import { connect } from 'react-redux';
import { fetchPetition } from 'actions/PetitionActions';
import getPetition from 'selectors/petition';

const FetchPetitionWrapper = (WrappedComponent) => {
  const FetchPetition = ({ petition }) => (
    <WrappedComponent petition={petition} />
  );

  FetchPetition.fetchData = ({ store, params }) => {
    return store.dispatch(fetchPetition(params.id));
  };

  FetchPetition.propTypes = {
    petition: React.PropTypes.object
  };

  const mapStateToProps = ({ petition }) => ({
    petition: getPetition(petition)
  });

  return connect(
    mapStateToProps,
  )(FetchPetition);
};

export default FetchPetitionWrapper;
