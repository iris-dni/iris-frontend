import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { logout } from 'actions/AuthActions';
import { authSettings } from 'settings';

const Logout = withRouter(React.createClass({
  componentWillMount () {
    if (__CLIENT__) {
      this.props.logout();
      this.props.router.replace(authSettings.afterLogoutPath);
    }
  },

  render () {
    return null;
  }
}));

export const mapStateToProps = (state) => {
  return state;
};

export const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
