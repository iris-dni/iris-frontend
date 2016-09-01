import React from 'react';

const CheckAuth = ({ me, children }) => (
  __SERVER__ || me.isLoading || !children
    ? <div>Loading screen</div>
    : children
);

export default CheckAuth;
