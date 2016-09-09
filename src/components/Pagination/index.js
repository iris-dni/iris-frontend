import React from 'react';

const Pagination = ({ total, params }) => (
  <nav>
    Total: {total}
    Page: {params && params.page}
    Limit: {params && params.limit}
  </nav>
);

export default Pagination;
