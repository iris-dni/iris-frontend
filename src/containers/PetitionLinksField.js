import React from 'react';
import { stopSubmit, touch } from 'redux-form';
import { connect } from 'react-redux';
import { fetchOpenGraph, removeOpenGraph } from 'actions/OpenGraphActions';
import PetitionLinksField from 'components/PetitionLinksField';

const PetitionLinksFieldContainer = (props) => (
  <PetitionLinksField {...props} />
);

const mapDispatchToProps = (dispatch) => ({
  revalidateForm: (form, errors) => dispatch(stopSubmit(form, errors)),
  touchField: (form, fields) => dispatch(touch(form, fields)),
  fetchOpenGraph: (url) => dispatch(fetchOpenGraph(url)),
  removeOpenGraph: (url) => dispatch(removeOpenGraph(url))
});

PetitionLinksFieldContainer.propTypes = {
  revalidateForm: React.PropTypes.func,
  touchField: React.PropTypes.func,
  fetchOpenGraph: React.PropTypes.func,
  removeOpenGraph: React.PropTypes.func
};

export default connect(
  null,
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
