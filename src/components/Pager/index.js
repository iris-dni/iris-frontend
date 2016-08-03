import React from 'react';
import { Link } from 'react-router';

const Pager = ({ path, page, per, total }) => {
  const last = Math.ceil(total / per);
  const prev = page - 1 > 0 ? page - 1 : false;
  const next = page < last ? page + 1 : false;

  return (
    <ul>
      <li><Link to={path} query={{page: 1}}>first</Link></li>
      <li><Link to={path} query={{page: prev || 1}}>prev</Link></li>
      <li><Link to={path} query={{page: next || last}}>next</Link></li>
      <li><Link to={path} query={{page: last}}>last</Link></li>
    </ul>
  );
};

Pager.propTypes = {
  page: React.PropTypes.number,
  per: React.PropTypes.number,
  total: React.PropTypes.number
};

export default Pager;
