import React from 'react';
import settings from 'settings';
import Container from 'components/Container';
import Grid from 'components/Grid';
import GridItem from 'components/GridItem';
import Teaser from 'components/Teaser';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import ButtonLink from 'components/ButtonLink';
import TextCenter from 'components/TextCenter';
import Paragraph from 'components/Paragraph';

const Petitions = ({ petitions }) => (
  <Container>
    <section>
      <Header>
        <PageTitle
          title={settings.petitionsPageTitle}
          centered
        />
      </Header>
      <TextCenter>
        <Paragraph>
          <ButtonLink
            href={'/petitions/new'}
            text={'Create a new Petition'}
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
