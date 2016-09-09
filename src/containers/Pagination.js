import React from 'react';
import { connect } from 'react-redux';
import Pagination from 'components/Pagination';
import getPaginationFromParams from 'helpers/getPaginationFromParams';

const PaginationContainer = (props) => (
  <Pagination {...props} />
);

const mapStateToProps = (state, props) => {
  const dataType = state[props.type || 'petitions'] || {};
  const showingCount = dataType.data.length;
  return getPaginationFromParams(
    showingCount,
    dataType.total,
    dataType.params
  );
};

PaginationContainer.propTypes = {
  owner: React.PropTypes.string,
  city: React.PropTypes.string,
  dateRange: React.PropTypes.string
};

export default connect(
  mapStateToProps
)(PaginationContainer);
