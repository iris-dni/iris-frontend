import React from 'react';

const Loading = ({ isLoading, children, onServer }) => (
  onServer || (__CLIENT__ && isLoading) || !children
    ? <div>Loading screen</div>
    : children
);

export default Loading;
