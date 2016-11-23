import React from 'react';
import Markdown from 'react-markdown';
import settings from 'settings';
import styles from './petition-response-status.scss';
import Icon from 'components/Icon';
import Link from 'components/Link';

const PetitionResponseStatus = ({ title, text, closed }) => (
  <article className={styles.root} >
    <header className={styles.top}>
      <span className={styles.icon}>
        <Icon id='Flag' size='small' modifier='highlight' />
      </span>
      <h2 className={styles.title}>{title}</h2>
    </header>
    <Markdown source={text} />
    {closed &&
      <p className={styles.anchor}>
        <Link external href={'#response'}>
          {settings.petitionResponseStatus.link}
        </Link>
      </p>
    }
  </article>
);

export default PetitionResponseStatus;
