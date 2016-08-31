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
import Paragraph from 'components/Paragraph';

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
        <Paragraph>
          <ModalTrigger
            authenticating
            modal={'auth'}
            href={'/petitions/new'}
            text={settings.petitionsPage.createButton}
            modifier={'accent'}
          />
        </Paragraph>
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
