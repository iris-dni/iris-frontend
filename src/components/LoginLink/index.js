import React from 'react';
import { connect } from 'react-redux';
import { fetchWhoAmI } from 'actions/AuthActions';
import { Link } from 'react-router';

const loginLink = () => {
  return <Link to='/auth/login'>Login</Link>;
};

const logoutLink = () => {
  return <Link to='/auth/logout'>Logout</Link>;
};

const LoginLink = React.createClass({

  getInitialState: () => ({
    loggedIn: false,
    me: null
  }),

  componentWillMount () {
    if (__CLIENT__) {
      this.props.fetchWhoAmI();
    }
  },

  render () {
    return this.props.me ? logoutLink() : loginLink();
  }
});

export const mapStateToProps = (state) => {
  return state;
};

export const mapDispatchToProps = (dispatch) => {
  return { fetchWhoAmI: () => dispatch(fetchWhoAmI()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginLink);
