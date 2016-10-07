import React from 'react';
import modules from 'components/Home/modules';

const Home = () => (
  <article>
    {modules.map((block, index) =>
      React.createElement(block.component, Object.assign({}, block.props,
        { key: index }
      ))
    )}
  </article>
);

export default Home;
