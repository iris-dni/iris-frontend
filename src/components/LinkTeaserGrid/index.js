import React from 'react';
import Grid from 'components/Grid';
import GridItem from 'components/GridItem';
import LinkTeaser from 'components/LinkTeaser';
import styles from './link-teaser-grid.scss';

const LinkTeaserGrid = ({ links }) => (
  <div className={styles.root}>
    <Grid modifier='centered'>
      {(links || []).map((link, index) => (
        <GridItem key={index}>
          <LinkTeaser link={link} />
        </GridItem>
      ))}
    </Grid>
  </div>
);

export default LinkTeaserGrid;
