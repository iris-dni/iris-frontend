import React from 'react';

const createPagedLink = (page, qs) => {
  return `/petitions/page/${page}${qs ? `?${qs}` : ''}`;
};

const Pagination = ({
  limit,
  totalCount,
  showingCount,
  currentPage,
  totalPages,
  nextPage,
  prevPage,
  isFirstPage,
  isLastPage,
  currentQuery
}) => (
  <nav>
    Showing page {currentPage} of {totalPages}
    {totalPages > 1 &&
      <ul>
        {!isFirstPage &&
          <li>
            <a href={createPagedLink(prevPage, currentQuery)}>
              Prev page
            </a>
          </li>
        }
        {!isLastPage &&
          <li>
            <a href={createPagedLink(nextPage, currentQuery)}>
              Next page
            </a>
          </li>
        }
      </ul>
    }
  </nav>
);

export default Pagination;
