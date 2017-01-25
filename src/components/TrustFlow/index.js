import React from 'react';
import settings from 'settings';
import Section from 'components/Section';
import ArticleBlock from 'components/ArticleBlock';
import MarkdownParagraph from 'components/MarkdownParagraph';
import Grid from 'components/Grid';
import GridItem from 'components/GridItem';

const TrustFlow = ({ action }) => (
  <Section margin>
    <Grid>
      <GridItem cols={2}>
        <ArticleBlock
          icon={'Key'}
          title={settings.trustFlow.step1[action].title}>
          <MarkdownParagraph
            size={'small'}
            text={settings.trustFlow.step1[action].text}
          />
        </ArticleBlock>
      </GridItem>
      <GridItem cols={2}>
        <ArticleBlock
          icon={'Phone'}
          title={settings.trustFlow.step2[action].title}>
          <MarkdownParagraph
            size={'small'}
            text={settings.trustFlow.step2[action].text}
          />
        </ArticleBlock>
      </GridItem>
    </Grid>
  </Section>
);

export default TrustFlow;
