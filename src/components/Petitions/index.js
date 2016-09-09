import React from 'react';
import settings from 'settings';
import Container from 'components/Container';
import TeaserGrid from 'components/TeaserGrid';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import ButtonLink from 'components/ButtonLink';
import Loading from 'components/Loading';

const Petitions = ({ petitions }) => (
  <Container>
    <section>
      <Header>
        <PageTitle
          title={settings.petitionsPage.title}
          centered>
          <ButtonLink
            href={'/petitions/new'}
            text={settings.petitionsPage.createButton.text}
            modifier={'accent'}
          />
        </PageTitle>
      </Header>
      <Loading isLoading={petitions.isLoading}>
        {petitions.length
          ? <TeaserGrid petitions={petitions} />
          : <div>Nothing here sadly</div>
        }
      </Loading>
    </section>
  </Container>
);

export default Petitions;
