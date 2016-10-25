import React from 'react';
import styles from './petitions.scss';
import Container from 'components/Container';
import TeaserGrid from 'components/TeaserGrid';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import PetitionsFilters from 'components/PetitionsFilters';
import NoResults from 'components/NoResults';
import AdSlot from 'components/AdSlot';
import Pagination from 'containers/Pagination';

const Petitions = (props) => (
  <Container>
    <section>
      <div className={styles['header-wrapper']}>
        <AdSlot
          currentCity={props.currentCity}
          type='wideboard'
        />
        <Header padding>
          <PageTitle
            title={props.title}
            centered
          />

          <PetitionsFilters {...props} />
        </Header>
      </div>

      {props.petitions.length || props.isLoading
        ? <TeaserGrid
          petitions={props.petitions}
          isLoading={props.isLoading}
          />
        : <NoResults />
      }

      {props.petitions.length > 0 &&
        <Pagination />
      }
    </section>
  </Container>
);

export default Petitions;
