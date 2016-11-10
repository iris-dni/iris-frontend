import React from 'react';
import styles from './petitions.scss';
import Section from 'components/Section';
import Container from 'components/Container';
import TeaserGrid from 'components/TeaserGrid';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import PetitionsFilters from 'components/PetitionsFilters';
import NoResults from 'components/NoResults';
import Pagination from 'containers/Pagination';
import Loading from 'components/Loading';

const Petitions = (props) => (
  <Section margin>
    <Container>
      <div className={styles['header-wrapper']}>
        <Header padding>
          <PageTitle
            title={props.title}
            centered
          />
          <PetitionsFilters {...props} />
        </Header>
      </div>
      {props.petitions.length || props.isLoading
        ? (
          <Loading isLoading={props.isLoading}>
            <div>
              <TeaserGrid petitions={props.petitions} />
              {props.petitions.length > 0 &&
                <Pagination />
              }
            </div>
          </Loading>
        ) : <NoResults />
      }
    </Container>
  </Section>
);

export default Petitions;
