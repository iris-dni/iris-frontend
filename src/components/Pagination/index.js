import React from 'react';
import styles from './pagination.scss';
import { Link } from 'react-router';
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
      <span className={styles.previous} itemProp='url'>
        <Link
          rel='prev'
          itemProp='name'
          to={getPaginationLink(prevPage, currentQuery)}>
          Previous
        </Link>
      </span>
    }

    {totalPages > 1 &&
      <span>{currentPage} of {totalPages}</span>
    }

    {isLastPage &&
      <span className={styles.next}>Next</span>
    }

    {!isLastPage &&
      <span className={styles.next} itemProp='url'>
        <Link
          rel='next'
          itemProp='name'
          to={getPaginationLink(nextPage, currentQuery)}>
          Next
        </Link>
      </span>
    }
  </nav>
);

export default Pagination;
