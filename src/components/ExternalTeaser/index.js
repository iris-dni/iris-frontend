import React from 'react';
import Icon from 'components/Icon';
import styles from './external-teaser.scss';
import stripProtocolFromURL from 'helpers/stripProtocolFromURL';

const ExternalTeaser = ({ url = '', og }) => (
  <article className={styles.root}>
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={url}
      className={styles.link}
    >
      <div className={styles['image-wrap']}>
        {og && og.image &&
          <img className={styles.image} src={og.image.url} alt={og.image.title || ''} />
        }
      </div>

      <div className={styles['content-wrap']}>
        {og && og.title &&
          <h3 className={styles.title}>{og.title}</h3>
        }

        <p className={styles.url}>
          <span className={styles['link-icon']}>
            <Icon
              size={'small'}
              id={og && og.type === 'video'
                ? 'Video'
                : 'Link'
              }
              modifier={'invert'}
            />
          </span>
          {stripProtocolFromURL(url)}
        </p>
      </div>
    </a>
  </article>
);

export default ExternalTeaser;
