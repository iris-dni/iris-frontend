import React from 'react';
import { Link } from 'react-router';
import LoginLink from 'components/LoginLink';
import { petitionsPath } from 'helpers/petitionUrls';

export default (props) => (
  <div>
    <h1>Home Component</h1>
    <p><LoginLink>Login</LoginLink></p>
    <p><Link to='/petitions/new'>Create new Petition (client)</Link></p>
    <p><Link to='/petitions/1ESkp'>Go to petition 1ESkp</Link></p>
    <p><Link to='/petitions'>Go to petitions</Link></p>
    <p>
      Go to petitions on Page
      <Link to={petitionsPath()}>1</Link>,
      <Link to={petitionsPath({ page: 2 })}>2</Link>,
      <Link to={petitionsPath({ page: 3 })}>3</Link>
    </p>
    <p><Link to={petitionsPath({city: { name: 'Aarau', id: 'nwch:1' }})}>Go to petitions in Aarau</Link></p>
  </div>
);
