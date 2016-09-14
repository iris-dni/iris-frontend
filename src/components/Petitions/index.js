import React from 'react';
import styles from './petitions.scss';
import Container from 'components/Container';
import TeaserGrid from 'components/TeaserGrid';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import PetitionsFilters from 'components/PetitionsFilters';
import NoResults from 'components/NoResults';
import Pagination from 'containers/Pagination';

const Petitions = ({
  petitions,
  isLoading,
  title,
  autocompleteProps
}) => (
  <Container>
    <section>
      <div className={styles['header-wrapper']}>
        <Header>
          <PageTitle
            title={title}
            centered />

          <PetitionsFilters
            autocompleteProps={autocompleteProps}
          />
        </Header>
      </div>

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
