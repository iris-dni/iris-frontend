import React from 'react';
import Icon from 'components/Icon';
import styles from './external-teaser.scss';

const ExternalTeaser = ({ url, og }) => (
  <article className={styles.root}>
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={`//${url}`}
      className={styles.link}
    >
      <div className={styles['image-wrap']}>
        {og.image &&
          <img className={styles.image} src={og.image.url} />
        }
      </div>

      <div className={styles['content-wrap']}>
        <h1 className={styles.title}>{og.title}</h1>

        {og.description &&
          <p className={styles.description}>{og.description}</p>
        }

        <p className={styles.url}>
          <span className={styles['link-icon']}>
            <Icon size={'small'} id={'User'} modifier={'invert'} />
          </span>
          {url}
        </p>
      </div>
    </a>
  </article>
);

export default ExternalTeaser;
