import React from 'react';
import MODULES from './modules';

const Home = () => (
  <article>
    {MODULES.map((block, index) =>
      React.createElement(block.component, Object.assign({}, block.props,
        { key: index }
      ))
    )}
  </article>
);

export default Home;
