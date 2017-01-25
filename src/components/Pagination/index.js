import React from 'react';
import styles from './pagination.scss';
import { Link } from 'react-router';
import { petitionsPath } from 'helpers/petitionUrls';

const Pagination = ({
  totalCount,
  showingCount,
  currentPage,
  totalPages,
  nextPage,
  prevPage,
  isFirstPage,
  isLastPage,
  currentQuery,
  params,
  currentCity
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
            <span className={`${styles.left} ${styles.disabled}`} role={'presentation'} />
          </div>
        </div>
      }

      {!isFirstPage &&
        <div className={styles['contain-left']}>
          <span itemProp='url'>
            <Link
              rel='prev'
              itemProp='name'
              className={styles.previous}
              to={petitionsPath({ ...params, city: currentCity, page: prevPage })}>
              <span className={styles.hidden}>Previous</span>
              <span className={styles.left} role={'presentation'} />
            </Link>
          </span>
        </div>
      }

      <div className={styles.count}>
        <span className={styles.active}>{currentPage}</span> of {totalPages}
      </div>

      {isLastPage &&
        <div className={styles['contain-right']}>
          <div className={styles.next}>
            <span className={styles.hidden}>Next</span>
            <span className={`${styles.right} ${styles.disabled}`} role={'presentation'} />
          </div>
        </div>
      }

      {!isLastPage &&
        <div className={styles['contain-right']}>
          <span itemProp='url'>
            <Link
              rel='next'
              itemProp='name'
              className={styles.next}
              to={petitionsPath({ ...params, city: currentCity, page: nextPage })}>
              <span className={styles.hidden}>Next</span>
              <span className={styles.right} role={'presentation'} />
            </Link>
          </span>
        </div>
      }
    </nav>
  );
};

export default Pagination;
