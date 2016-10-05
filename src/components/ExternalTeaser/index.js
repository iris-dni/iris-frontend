import React from 'react';
import Icon from 'components/Icon';
import styles from './external-teaser.scss';

const getIcon = (type) => (
  (type === 'video')
  ? 'Video'
  : 'Link'
);

const ExternalTeaser = ({ url, og }) => (
  <article className={styles.root}>
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={url}
      className={styles.link}
    >
      <div className={styles['image-wrap']}>
        {og && og.image &&
          <img className={styles.image} src={og.image.url} />
        }
      </div>

      <div className={styles['content-wrap']}>
        {og && og.title &&
          <h1 className={styles.title}>{og.title}</h1>
        }

        <p className={styles.url}>
          <span className={styles['link-icon']}>
            <Icon
              size={'small'}
              id={getIcon(og && og.type)}
              modifier={'invert'}
            />
          </span>
          {url}
        </p>
      </div>
    </a>
  </article>
);

export default ExternalTeaser;
