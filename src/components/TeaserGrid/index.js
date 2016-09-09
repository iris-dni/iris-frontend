import React from 'react';
import Grid from 'components/Grid';
import GridItem from 'components/GridItem';
import Teaser from 'components/Teaser';

const TeaserGrid = ({ petitions }) => (
  <Grid>
    {(petitions || []).map((petition) => {
      return (
        <GridItem key={petition.id}>
          <Teaser {...petition} key={petition.id} />
        </GridItem>
      );
    })}
  </Grid>
);

export default TeaserGrid;
