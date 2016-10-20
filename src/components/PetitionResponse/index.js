import React from 'react';
import styles from './petition-response.scss';
import settings from 'settings';
import Heading2 from 'components/Heading2';
import Paragraph from 'components/Paragraph';
import MarkdownParagraph from 'components/MarkdownParagraph';
import Icon from 'components/Icon';

const PetitionResponse = ({ cityResponse }) => {
  if (!cityResponse.text) {
    return null;
  }

  return (
    <article className={styles.root} id='response'>
      <header className={styles.top}>
        <span className={styles.icon}>
          <Icon id='Note' size='small' />
        </span>
        <Heading2
          text={settings.petitionPage.cityResponse}
        />
      </header>
      <MarkdownParagraph text={cityResponse.text} />
      <Paragraph text={cityResponse.name} />
    </article>
  );
};

export default PetitionResponse;
