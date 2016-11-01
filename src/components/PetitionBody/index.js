import React from 'react';
import styles from './petition-body.scss';
import settings from 'settings';
import Image from 'components/Image';
import Heading2 from 'components/Heading2';
import MarkdownParagraph from 'components/MarkdownParagraph';
import AdSlot from 'containers/AdSlot';

const PetitionBody = ({ image, description, suggestedSolution }) => (
  <div className={styles.root}>
    {image &&
      <div className={styles.image}>
        <Image {...image} attrs={{ w: 800, h: 600 }} />
      </div>
    }
    <Heading2 text={settings.petitionPage.description} />
    <MarkdownParagraph text={description} />
    <AdSlot context={'petition'} type='rectangle' />
    {suggestedSolution &&
      <div>
        <Heading2 text={settings.petitionPage.suggestedSolution} />
        <MarkdownParagraph text={suggestedSolution} />
      </div>
    }
  </div>
);

export default PetitionBody;
