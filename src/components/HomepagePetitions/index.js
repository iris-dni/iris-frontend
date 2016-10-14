import React from 'react';
import TeaserGrid from 'components/TeaserGrid';
import Container from 'components/Container';
import Section from 'components/Section';
import Heading2 from 'components/Heading2';
import TextCenter from 'components/TextCenter';

const HomepagePetitions = ({ groupedPetitions, title }) => (
  <section>
    <Section>
      <Container>
        <TextCenter>
          <Heading2 text={title} />
        </TextCenter>
        <TeaserGrid
          petitions={groupedPetitions.latest.data}
          isLoading={groupedPetitions.latest.isLoading}
        />
      </Container>
    </Section>
  </section>
);

export default HomepagePetitions;
