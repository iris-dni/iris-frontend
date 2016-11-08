import React from 'react';
import Markdown from 'react-markdown';
import { translation } from 'translations';
import styles from './petition-response-status.scss';
import getPetitionResponseStatusTitle from 'helpers/getPetitionResponseStatusTitle';
import getPetitionResponseStatusText from 'helpers/getPetitionResponseStatusText';
import Icon from 'components/Icon';
import Link from 'components/Link';

const PetitionResponseStatus = (props) => (
  <article className={styles.root} >
    <header className={styles.top}>
      <span className={styles.icon}>
        <Icon id='Flag' size='small' modifier='highlight' />
      </span>
      <h2 className={styles.title}>
        {getPetitionResponseStatusTitle(props)}
      </h2>
    </header>
    <Markdown source={getPetitionResponseStatusText(props)} />
    {props.closed &&
      <p className={styles.anchor}>
        <Link external href={'#response'}>
          {translation('petitionResponseStatus.link')}
        </Link>
      </p>
    }
  </article>
);

export default PetitionResponseStatus;
