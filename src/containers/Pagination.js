import React from 'react';
import { connect } from 'react-redux';
import Pagination from 'components/Pagination';
import petitionsPagination from 'selectors/petitionsPagination';

const PaginationContainer = (props) => (
  <Pagination {...props} />
);

const mapStateToProps = ({ petitions }) => petitionsPagination(petitions);

PaginationContainer.propTypes = {
  id: React.PropTypes.string
};

export default connect(
  mapStateToProps
)(PaginationContainer);
