import React from 'react';
import { Link } from 'react-router';
import Container from 'components/Container';
<<<<<<< 9b41f128f2dd40c0ee523484a4e7a11fff354a56
import TeaserGrid from 'components/TeaserGrid';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import NoResults from 'components/NoResults';
import Pagination from 'containers/Pagination';

const Petitions = ({ petitions, isLoading }) => (
=======
import Grid from 'components/Grid';
import GridItem from 'components/GridItem';
import TextCenter from 'components/TextCenter';
import Teaser from 'components/Teaser';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import Autocomplete from 'containers/Autocomplete';
import Loading from 'components/Loading';

const Petitions = ({ petitions, title, autocompleteProps }) => (
  <Container>
    <section>
      <Header>
        <PageTitle
          title={title}
          centered>
          <Autocomplete {...autocompleteProps} />
        </PageTitle>
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

      <Loading isLoading={petitions.isLoading}>
        {petitions.length
          ? <Grid>
            {petitions.map((petition) => {
              return (
                <GridItem key={petition.id}>
                  <Teaser {...petition} key={petition.id} />
                </GridItem>
              );
            })}
          </Grid>
          : <TextCenter>
            There are no petitions for this city yet! <Link to='/petitions/new'>Create the first!</Link>
          </TextCenter>
        }
      </Loading>
    </section>
  </Container>
);

export default Petitions;
