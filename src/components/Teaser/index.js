import React from 'react';
import { Link } from 'react-router';
import styles from './teaser.scss';
import TeaserFooter from 'components/TeaserFooter';

const Teaser = ({ id, link, title, footer }) => (
  <article className={styles.root}>
    <Link to={link} className={styles.link}>
      <h2 className={styles.title}>
        {title}
      </h2>
      <div className={styles.footer}>
        <TeaserFooter {...footer} />
      </div>
    </Link>
  </article>
);

export default Teaser;
