import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const RestrictedWrapper = (WrappedComponent) => {
  const Restricted = withRouter(React.createClass({
    componentWillMount () {
      if (__CLIENT__ && !this.props.me) {
        const redirectAfterLogin = this.props.location.pathname;
        this.props.router.push(`/auth/login?next=${encodeURIComponent(redirectAfterLogin)}`);
      }
    },

    render () {
      return <WrappedComponent {...this.props} />;
    }
  }));

  const mapStateToProps = (state) => {
    return state;
  };

  const mapDispatchToProps = (dispatch) => ({});

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Restricted);
};

export default RestrictedWrapper;
