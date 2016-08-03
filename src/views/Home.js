import React from 'react';
import { Link } from 'react-router';

export default (props) => (
  <div>
    <h1>Home Component</h1>
    <p><Link to='/petitions/5'>Go to petition 5</Link></p>
    <p><Link to='/petitions'>Go to petitions</Link></p>
    <p><Link to='/petitions?limit=1'>Go to petitions</Link></p>
  </div>
);
