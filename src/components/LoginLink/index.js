import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const loginLink = () => {
  return <Link to='/auth/login'>Login</Link>;
};

const logoutLink = () => {
  return <Link to='/auth/logout'>Logout</Link>;
};

const LoginLink = React.createClass({
  render () {
    return this.props.me.id ? logoutLink() : loginLink();
  }
});

export const mapStateToProps = ({ me }) => ({ me });

export default connect(
  mapStateToProps
)(LoginLink);
