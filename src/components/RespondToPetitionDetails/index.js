import React from 'react';
import settings from 'settings';
import styles from './respond-to-petition-details.scss';

const RespondToPetitionDetails = ({ title, link, author, city, supporters }) => (
  <dl className={styles.list}>
    <dt className={styles.title}>
      {settings.respondToPetitionPage.details.for}
    </dt>
    <dd className={styles.text}>
      <a target={'_blank'} href={link}>{title}</a>
    </dd>
    {author &&
      <dt className={styles.title}>
        {settings.respondToPetitionPage.details.by}
      </dt>
    }
    {author &&
      <dd className={styles.text}>
        {author}
      </dd>
    }
    {city &&
      <dt className={styles.title}>
        {settings.respondToPetitionPage.details.in}
      </dt>
    }
    {city &&
      <dd className={styles.text}>
        {city}
      </dd>
    }
    <dt className={styles.title}>
      {settings.respondToPetitionPage.details.collected}
    </dt>
    <dd className={styles.text}>
      {supporters} {settings.respondToPetitionPage.details.supporters}
    </dd>
  </dl>
);

export default RespondToPetitionDetails;
