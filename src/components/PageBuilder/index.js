import React from 'react';
import PageHeader from 'components/PageHeader';
import LogosGrid from 'components/LogosGrid';
import Hero from 'components/Hero';
import ContentGrid from 'components/ContentGrid';
import ContentBlock from 'components/ContentBlock';
import PetitionGroup from 'containers/PetitionGroup';
import CallToAction from 'components/CallToAction';

const components = {
  PageHeader: PageHeader,
  Hero: Hero,
  ContentGrid: ContentGrid,
  ContentBlock: ContentBlock,
  LogosGrid: LogosGrid,
  PetitionGroup: PetitionGroup,
  CallToAction: CallToAction
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
