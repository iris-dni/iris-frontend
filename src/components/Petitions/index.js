import React from 'react';
import settings from 'settings';
import Container from 'components/Container';
import Grid from 'components/Grid';
import GridItem from 'components/GridItem';
import Teaser from 'components/Teaser';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';

const Petitions = ({ total, petitions, currentPage, perPage }) => (
  <Container>
    <section>
      <Header>
        <PageTitle
          title={settings.petitionsPageTitle}
          centered
        />
      </Header>
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
