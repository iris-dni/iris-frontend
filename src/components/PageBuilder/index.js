import React from 'react';
import Hero from 'components/Hero';
import ThreeUp from 'components/ThreeUp';
import TwoUp from 'components/TwoUp';
import PetitionGroup from 'containers/PetitionGroup';

const components = {
  Hero: Hero,
  ThreeUp: ThreeUp,
  TwoUp: TwoUp,
  PetitionGroup: PetitionGroup
};

const PageBuilder = ({ modules = [] }) => (
  <article>
    {modules.map((block, index) =>
      React.createElement(components[block.component], Object.assign({}, block.props,
        { key: index }
      ))
    )}
  </article>
);

export default PageBuilder;
