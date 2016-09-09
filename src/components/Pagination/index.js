import React from 'react';

const Pagination = ({
  total,
  showing,
  currentPage,
  pages
}) => (
  <nav>
    Total: {total}
    Showing: {showing}
    Page: {currentPage}
    Pages: {pages}
  </nav>
);

export default Pagination;
