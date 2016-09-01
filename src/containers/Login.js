import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { authSettings } from 'settings';
import CheckAuth from 'components/CheckAuth';
import LoginPage from 'components/LoginPage';

const LoginContainer = withRouter(React.createClass({
  componentWillUpdate (nextProps) {
    const redirectAfterLogin = this.props.location.query.next || authSettings.afterLoginPath;
    if (nextProps.me && nextProps.me.id) {
      this.props.router.replace(redirectAfterLogin);
    }
  },

  render () {
    return (
      <CheckAuth me={this.props.me}>
        <LoginPage location={this.props.location} />
      </CheckAuth>
    );
  }
}));

export const mapStateToProps = ({ me }) => ({ me });

export default connect(
  mapStateToProps
)(LoginContainer);
