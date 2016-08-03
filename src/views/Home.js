import React from 'react';
import { Link } from 'react-router';

export default (props) => (
  <div>
    <h1>Home Component</h1>
    <p><Link to='/petitions/5'>Go to petition 5</Link></p>
    <p><Link to='/petitions'>Go to petitions</Link></p>
    <p>
      Go to petitions on Page
      <Link to='/petitions'>1</Link>,
      <Link to='/petitions?page=2'>2</Link>,
      <Link to='/petitions?page=3'>3</Link>
    </p>
  </div>
);
