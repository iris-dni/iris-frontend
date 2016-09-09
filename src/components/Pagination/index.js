import React from 'react';

const Pagination = ({
  total,
  showing,
  limit,
  currentPage,
  pages
}) => (
  <nav>
    Total: {total}
    Showing: {showing}
    Limit: {limit}
    Page: {currentPage}
    Pages: {pages}
  </nav>
);

export default Pagination;
