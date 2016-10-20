import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { authSettings } from 'settings';
import Loading from 'components/Loading';
import LoginPage from 'components/LoginPage';

const LoginContainer = withRouter(React.createClass({
  componentWillUpdate (nextProps) {
    const redirectAfterLogin = this.props.location.query.next || authSettings.afterLoginPath;
      // If user is now authenticated, redirect to location
      // from query param or default after-login location
    if (nextProps.me && nextProps.me.id) {
      this.props.router.replace(redirectAfterLogin);
    }
  },

  render () {
    return (
      <Loading isLoading={this.props.me.isLoading} onServer={__SERVER__}>
        <LoginPage location={this.props.location} />
      </Loading>
    );
  }
}));

export const mapStateToProps = ({ me }) => ({ me });

export default connect(
  mapStateToProps
)(LoginContainer);
