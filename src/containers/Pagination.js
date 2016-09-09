import React from 'react';
import { connect } from 'react-redux';
import Pagination from 'components/Pagination';

const PaginationContainer = (props) => (
  <Pagination {...props} />
);

const mapStateToProps = (state, props) => {
  const type = state[props.type || 'petitions'] || {};
  const { total, params } = type;
  return { total, params };
};

PaginationContainer.propTypes = {
  owner: React.PropTypes.string,
  city: React.PropTypes.string,
  dateRange: React.PropTypes.string
};

export default connect(
  mapStateToProps
)(PaginationContainer);
