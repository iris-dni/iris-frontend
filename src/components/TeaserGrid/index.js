import React from 'react';
import styles from './teaser-grid.scss';
import Grid from 'components/Grid';
import GridItem from 'components/GridItem';
import Teaser from 'components/Teaser';
import Loading from 'components/Loading';

const TeaserGrid = ({ petitions, isLoading }) => (
  <Loading isLoading={isLoading} onServer={__SERVER__}>
    <div className={styles.root}>
      <div className={styles.grid}>
        <Grid>
          {(petitions || []).map((petition) => {
            return (
              <GridItem key={petition.id}>
                <Teaser {...petition} key={petition.id} />
              </GridItem>
            );
          })}
        </Grid>
      </div>
    </div>
  </Loading>
);

export default TeaserGrid;
