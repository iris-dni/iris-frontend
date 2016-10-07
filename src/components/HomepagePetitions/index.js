import React from 'react';
import TeaserGrid from 'components/TeaserGrid';

const HomepagePetitions = ({ petitions, title }) => (
  <section>
    <TeaserGrid petitions={petitions} />
  </section>
);

export default HomepagePetitions;
