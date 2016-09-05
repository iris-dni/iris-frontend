import React from 'react';
import { Link } from 'react-router';
import LoginLink from 'components/LoginLink';

export default (props) => (
  <div>
    <h1>Home Component</h1>
    <p><LoginLink>Login</LoginLink></p>
    <p><Link to='/petitions/new'>Create new Petition (client)</Link></p>
    <p><a href='/petitions/new'>Create new Petition (server)</a></p>
    <p><Link to='/petitions/1ESkp'>Go to petition 1ESkp</Link></p>
    <p><Link to='/petitions/1ESkp/edit'>Edit petition 1ESkp</Link></p>
    <p><Link to='/petitions/1jWQQ/edit'>Edit petition 1jWQQ</Link></p>
    <p><Link to='/petitions'>Go to petitions</Link></p>
    <p>
      Go to petitions on Page
      <Link to='/petitions'>1</Link>,
      <Link to='/petitions?page=2'>2</Link>,
      <Link to='/petitions?page=3'>3</Link>
    </p>
  </div>
);
