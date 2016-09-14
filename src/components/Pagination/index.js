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
}) => {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav className={styles.root} role='navigation' itemScope itemType='http://schema.org/SiteNavigationElement/Pagination'>
      {isFirstPage &&
        <div className={styles['contain-left']}>
          <div className={styles.previous}>
            <span className={styles.hidden}>Previous</span>
            <span className={`${styles.left} ${styles.dimmed}`} />
          </div>
        </div>
      }

      {!isFirstPage &&
        <div className={styles['contain-left']}>
          <div className={styles.previous} itemProp='url'>
            <Link
              rel='prev'
              itemProp='name'
              to={getPaginationLink(prevPage, currentQuery)}>
              <span className={styles.hidden}>Previous</span>
              <span className={styles.left} />
            </Link>
          </div>
        </div>
      }

      <div className={styles.count}>
        <span className={styles.active}>{currentPage}</span> of {totalPages}
      </div>

      {isLastPage &&
        <div className={styles['contain-right']}>
          <div className={styles.next}>
            <span className={styles.hidden}>Next</span>
            <span className={`${styles.right} ${styles.dimmed}`} />
          </div>
        </div>
      }

      {!isLastPage &&
        <div className={styles['contain-right']}>
          <div className={styles.next} itemProp='url'>
            <Link
              rel='next'
              itemProp='name'
              to={getPaginationLink(nextPage, currentQuery)}>
              <span className={styles.hidden}>Next</span>
              <span className={styles.right} />
            </Link>
          </div>
        </div>
      }
    </nav>
  );
};

export default Pagination;
