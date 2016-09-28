import React from 'react';
import styles from './link-teaser.scss';

const LinkTeaser = ({ link }) => (
  <a
    target='_blank'
    rel='noopener noreferrer'
    href={link.url}
    className={styles.root}
    style={{
      backgroundImage: link.og && link.og.image
        ? `url(${link.og.image.url})`
        : ''
    }}>
    {link.og &&
      <div>
        <h3>{link.og.title}</h3>
        <p className={styles.description}>{link.og.description}</p>
      </div>
    }
    <span>{link.url}</span>
  </a>
);

export default LinkTeaser;
