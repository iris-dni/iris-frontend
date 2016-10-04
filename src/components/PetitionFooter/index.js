import React from 'react';
import settings from 'settings';
import Heading2 from 'components/Heading2';
import TextCenter from 'components/TextCenter';
import Grid from 'components/Grid';
import GridItem from 'components/GridItem';
import ExternalTeaser from 'components/ExternalTeaser';
import styles from './petition-footer.scss';

const PetitionFooter = ({ links }) => (
  <section className={styles.root}>
    <header className={styles.header}>
      <TextCenter>
        <Heading2 text={settings.petitionPage.attachedLinks} />
      </TextCenter>
    </header>

    <Grid modifier='centered'>
      {links.map((link, index) => (
        <GridItem key={link.title}>
          <ExternalTeaser {...link} />
        </GridItem>
      ))}
    </Grid>
  </section>
);

export default PetitionFooter;
