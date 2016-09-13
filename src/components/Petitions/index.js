import React from 'react';
import settings from 'settings';
import Container from 'components/Container';
import TeaserGrid from 'components/TeaserGrid';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import NoResults from 'components/NoResults';
import Pagination from 'containers/Pagination';

const Petitions = ({ petitions, isLoading }) => (
  <Container>
    <section>
      <Header>
        <PageTitle
          title={settings.petitionsPage.title}
          centered
        />
      </Header>
      {petitions.length || isLoading
        ? <TeaserGrid
          petitions={petitions}
          isLoading={isLoading}
          />
        : <NoResults />
      }
      {petitions.length > 0 &&
        <Pagination />
      }
    </section>
  </Container>
);

export default Petitions;
