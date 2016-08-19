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
    return this.props.me ? logoutLink() : loginLink();
  }
});

export const mapStateToProps = (state) => {
  return state;
};

export const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginLink);
