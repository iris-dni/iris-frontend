import React from 'react';
import { connect } from 'react-redux';
import { fetchOpenGraph } from 'actions/OpenGraphActions';
import PetitionLinksField from 'components/PetitionLinksField';

const PetitionLinksFieldContainer = (props) => (
  <PetitionLinksField {...props} />
);

const mapStateToProps = ({ petition, openGraph }) => ({
  // links: petition.links || [],
  isLoading: openGraph.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  fetchOpenGraph: (url) => dispatch(fetchOpenGraph(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetitionLinksFieldContainer);
