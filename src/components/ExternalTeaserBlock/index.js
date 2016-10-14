import React from 'react';
import Heading2 from 'components/Heading2';
import TextCenter from 'components/TextCenter';
import Grid from 'components/Grid';
import GridItem from 'components/GridItem';
import ExternalTeaser from 'components/ExternalTeaser';
import styles from './external-teaser-block.scss';

const ExternalTeaserBlock = ({ links, title }) => (
  <div className={styles.root}>
    <header className={styles.header}>
      <TextCenter>
        <Heading2 text={title} />
      </TextCenter>
    </header>

    <Grid modifier='centered'>
      {links.map((link, index) => (
        <GridItem key={index}>
          <ExternalTeaser {...link} />
        </GridItem>
      ))}
    </Grid>
  </div>
);

export default ExternalTeaserBlock;
