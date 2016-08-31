import React from 'react';
import settings from 'settings';
import Container from 'components/Container';
import Grid from 'components/Grid';
import GridItem from 'components/GridItem';
import Teaser from 'components/Teaser';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import ModalTrigger from 'containers/ModalTrigger';
import TextCenter from 'components/TextCenter';

const Petitions = ({ petitions }) => (
  <Container>
    <section>
      <Header>
        <PageTitle
          title={settings.petitionsPage.title}
          centered
        />
      </Header>
      <TextCenter>
        <ModalTrigger
          authenticating
          modal={'auth'}
          href={'/petitions/new'}
          text={settings.petitionsPage.createButton}
          modifier={'accent'}
        />
      </TextCenter>
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
