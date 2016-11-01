import React from 'react';
import { Link } from 'react-router';
import styles from './teaser.scss';
import TeaserFooter from 'components/TeaserFooter';
import PetitionTags from 'components/PetitionTags';
import ImageContainer from 'components/ImageContainer';

const Teaser = (props) => (
  <article className={styles.root}>
    <Link to={props.link} className={styles.link}>
      <div className={styles.tags}>
        <PetitionTags isTeaser {...props.tags} />
      </div>
      {props.image &&
        <div className={styles.image}>
          <ImageContainer
            {...props.image}
            attrs={{ w: 400, h: 200 }}
          />
        </div>
      }
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
