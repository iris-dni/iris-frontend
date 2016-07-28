import React from 'react';
import { Link } from 'react-router';

export default (props) => (
  <div>
    <h1>Home Component</h1>
    <p><Link to='/basic'>Go to basic route</Link></p>
  </div>
);
