import React from 'react';
import settings from 'settings';
import Container from 'components/Container';
import TeaserGrid from 'components/TeaserGrid';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import Loading from 'components/Loading';
import NoResults from 'components/NoResults';
import Pagination from 'containers/Pagination';

const Petitions = ({ petitions }) => (
  <Container>
    <section>
      <Header>
        <PageTitle
          title={settings.petitionsPage.title}
          centered
        />
      </Header>
      <Loading isLoading={petitions.isLoading}>
        {petitions.length
          ? <TeaserGrid petitions={petitions} />
          : <NoResults />
        }
      </Loading>
      <Pagination type={'petitions'} />
    </section>
  </Container>
);

export default Petitions;
