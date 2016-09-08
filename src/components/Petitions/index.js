import React from 'react';
import settings from 'settings';
import Container from 'components/Container';
import Grid from 'components/Grid';
import GridItem from 'components/GridItem';
import Teaser from 'components/Teaser';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import ModalTrigger from 'containers/ModalTrigger';
import Loading from 'components/Loading';

const modal = {
  ...settings.petitionsPage.createButton.modal,
  type: 'auth'
};

const Petitions = ({ petitions }) => (
  <Container>
    <section>
      <Header>
        <PageTitle
          title={settings.petitionsPage.title}
          centered>
          <ModalTrigger
            authenticating
            modal={modal}
            href={'/petitions/new'}
            text={settings.petitionsPage.createButton.text}
            modifier={'accent'}
          />
        </PageTitle>
      </Header>
      <Loading isLoading={petitions.isLoading}>
        <Grid>
          {petitions.map((petition) => {
            return (
              <GridItem key={petition.id}>
                <Teaser {...petition} key={petition.id} />
              </GridItem>
            );
          })}
        </Grid>
      </Loading>
    </section>
  </Container>
);

export default Petitions;
