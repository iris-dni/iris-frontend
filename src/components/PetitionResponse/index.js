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
        <MarkdownParagraph text={cityResponse.text} />
        <Paragraph text={cityResponse.name} />
      </ArticleBlock>
    </div>
  );
};

export default PetitionResponse;
