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
  mapDispatchToProps,
  null,
  // redux-form “onChange”, manually adding errors to a field or removing a
  // field doesn’t always trigger a re-render. There are even some
  // discrepancies between what triggers a re-render between the create and the
  // edit form… This forces the component to re-render on every change.
  // See “My views aren’t updating when something changes outside of Redux”:
  // https://github.com/reactjs/react-redux/blob/master/docs/troubleshooting.md
  { pure: false }
)(PetitionLinksFieldContainer);
