import React from 'react';
import styles from './petition-body.scss';
import settings from 'settings';
import Heading2 from 'components/Heading2';
import MarkdownParagraph from 'components/MarkdownParagraph';
// import AdSlot from 'containers/AdSlot';

const PetitionBody = ({ description, suggestedSolution }) => (
  <div className={styles.root}>
    <Heading2 text={settings.petitionPage.description} />
    <MarkdownParagraph text={description} />
    {/* <AdSlot context={'petition'} type='rectangle' /> */}
    {suggestedSolution &&
      <div>
        <Heading2 text={settings.petitionPage.suggestedSolution} />
        <MarkdownParagraph text={suggestedSolution} />
      </div>
    }
  </div>
);

export default PetitionBody;
