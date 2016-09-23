import React from 'react';
import { Link } from 'react-router';
import styles from './teaser.scss';
import TeaserFooter from 'components/TeaserFooter';

const Teaser = (props) => (
  <article className={props.winning ? styles.winning : styles.root}>
    <Link to={props.link} className={styles.link}>
      <h2 className={styles.title}>
        {props.title}
      </h2>
      <div className={styles.footer}>
        <TeaserFooter
          city={props.city}
          owner={props.owner}
          metrics={props.metrics}
        />
      </div>
    </Link>
  </article>
);

export default Teaser;
