import React from 'react';

const Pagination = ({
  limit,
  totalCount,
  showingCount,
  currentPage,
  totalPages
}) => (
  <nav>
    Limit: {limit}
    Total: {totalCount}
    Showing: {showingCount}
    Page: {currentPage}
    Pages: {totalPages}
  </nav>
);

export default Pagination;
