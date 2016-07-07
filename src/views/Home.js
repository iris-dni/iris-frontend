import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <h1>Home Component</h1>
        <p><Link to='/basic'>Go to basic route</Link></p>
      </div>
    );
  }
}
