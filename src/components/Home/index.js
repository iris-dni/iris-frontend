import React from 'react';
import Hero from 'components/Hero';
import PetitionGroup from 'containers/PetitionGroup';

const components = {
  Hero: Hero,
  PetitionGroup: PetitionGroup
};

const Home = ({ modules = [] }) => (
  <article>
    {modules.map((block, index) =>
      React.createElement(components[block.component], Object.assign({}, block.props,
        { key: index }
      ))
    )}
  </article>
);

export default Home;
