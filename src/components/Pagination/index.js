import React from 'react';
import getPaginationLink from 'helpers/getPaginationLink';

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
            <a href={getPaginationLink(prevPage, currentQuery)}>
              Prev page
            </a>
          </li>
        }
        {!isLastPage &&
          <li>
            <a href={getPaginationLink(nextPage, currentQuery)}>
              Next page
            </a>
          </li>
        }
      </ul>
    }
  </nav>
);

export default Pagination;
