import React from 'react';

const Pagination = ({
  limit,
  totalCount,
  showingCount,
  currentPage,
  totalPages,
  nextPage,
  prevPage,
  isFirstPage,
  isLastPage
}) => (
  <nav>
    Showing page {currentPage} of {totalPages}
    {totalPages > 1 &&
      <ul>
        {!isFirstPage &&
          <li>
            <a href={`/petitions/page/${prevPage}`}>
              Prev page
            </a>
          </li>
        }
        {!isLastPage &&
          <li>
            <a href={`/petitions/page/${nextPage}`}>
              Next page
            </a>
          </li>
        }
      </ul>
    }
  </nav>
);

export default Pagination;
