import React from 'react';
import styles from './petitions.scss';
import settings from 'settings';
import Container from 'components/Container';
import Grid from 'components/Grid';
import GridItem from 'components/GridItem';
import Teaser from 'components/Teaser';
import Heading1 from 'components/Heading1';

const Petitions = ({ total, petitions, currentPage, perPage }) => (
  <Container>
    <section>
      <header className={styles.heading}>
        <Heading1 text={settings.petitionsPageTitle} />
      </header>
      <Grid>
        {petitions.map((petition) => {
          return (
            <GridItem key={petition.id}>
              <Teaser {...petition} key={petition.id} />
            </GridItem>
          );
        })}
      </Grid>
    </section>
  </Container>
);

export default Petitions;
