import React from 'react';
import { connect } from 'react-redux';
import { fetchOpenGraph } from 'actions/OpenGraphActions';
import wrapPetitionLinks from 'helpers/wrapPetitionLinks';
import PetitionLinksField from 'components/PetitionLinksField';

const PetitionLinksFieldContainer = (props) => (
  <PetitionLinksField {...props} />
);

const mapStateToProps = ({ petition }) => ({
  petitionLinks: wrapPetitionLinks(petition.links)
});

const mapDispatchToProps = (dispatch) => ({
  fetchOpenGraph: (url) => dispatch(fetchOpenGraph(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetitionLinksFieldContainer);
