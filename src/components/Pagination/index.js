import React from 'react';
import styles from './pagination.scss';
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
  <nav className={styles.root} role='navigation' itemScope itemType='http://schema.org/SiteNavigationElement/Pagination'>
    {isFirstPage &&
      <span className={styles.previous}>Previous</span>
    }

    {!isFirstPage &&
      <span className={styles.previous}>
        <a rel='prev' href={getPaginationLink(prevPage, currentQuery)} itemProp='url'>
          Previous
        </a>
      </span>
    }

    <span>{currentPage} of {totalPages}</span>

    {isLastPage &&
      <span className={styles.next}>Next</span>
    }

    {!isLastPage &&
      <span className={styles.next}>
        <a rel='next' href={getPaginationLink(nextPage, currentQuery)} itemProp='url'>
          Next
        </a>
      </span>
    }
  </nav>
);

export default Pagination;
