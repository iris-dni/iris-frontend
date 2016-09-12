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
  <nav role='navigation' itemScope itemType='http://schema.org/SiteNavigationElement/Pagination'>
    <span>Showing page {currentPage} of {totalPages}</span>
    {totalPages > 1 &&
      <ul>
        {!isFirstPage &&
          <li itemProp='url'>
            <a rel='prev' href={getPaginationLink(prevPage, currentQuery)} itemProp='name'>
              Prev page
            </a>
          </li>
        }
        {!isLastPage &&
          <li itemProp='url'>
            <a rel='next' href={getPaginationLink(nextPage, currentQuery)} itemProp='name'>
              Next page
            </a>
          </li>
        }
      </ul>
    }
  </nav>
);

export default Pagination;
