import React from 'react';
import styles from './petition-response.scss';
import settings from 'settings';
import ArticleBlock from 'components/ArticleBlock';
import Paragraph from 'components/Paragraph';
import MarkdownParagraph from 'components/MarkdownParagraph';

const PetitionResponse = ({ cityResponse }) => {
  if (!cityResponse.text) {
    return null;
  }

  return (
    <div className={styles.root} id='response'>
      <ArticleBlock
        title={settings.petitionPage.cityResponse}
        icon={'Note'}>
        <MarkdownParagraph size={'small'} text={cityResponse.text} />
        <Paragraph size={'small'} text={cityResponse.name} />
      </ArticleBlock>
    </div>
  );
};

export default PetitionResponse;
