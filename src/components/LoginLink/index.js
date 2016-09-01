import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const LoginLink = ({ me }) => (
  me && me.id
    ? <Link to='/auth/logout'>Logout</Link>
    : <Link to='/auth/login'>Login</Link>
);

export const mapStateToProps = ({ me }) => ({ me });

export default connect(
  mapStateToProps
)(LoginLink);
