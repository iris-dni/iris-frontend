import React from 'react';

const Loading = ({ isLoading, children }) => (
  __SERVER__ || isLoading || !children
    ? <div>Loading screen</div>
    : children
);

export default Loading;
