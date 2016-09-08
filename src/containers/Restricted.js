import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { showModalWindow } from 'actions/ModalActions';
import Loading from 'components/Loading';

const RestrictedWrapper = (WrappedComponent) => {
  const Restricted = withRouter(React.createClass({
    componentWillMount () {
      const { me, location, router } = this.props;
      // If on the client and user isn't authenticated
      if (__CLIENT__ && !me.id) {
        // If we are coming from a first-load, redirect to
        // /auth/login so user can authenticate
        if (location.action === 'POP') {
          router.replace(
            `/auth/login?next=${encodeURIComponent(location.pathname)}`
          );
        } else {
          // Else we are using react-router, go back
          // and open auth modal to authenticate
          router.goBack();
          this.props.showModalWindow({ type: 'auth' }, location);
        }
      }
    },

    render () {
      return (
        <Loading isLoading={this.props.me.isLoading} onServer={__SERVER__}>
          <WrappedComponent {...this.props} />
        </Loading>
      );
    }
  }));

  const mapStateToProps = (state) => (state);

  const mapDispatchToProps = (dispatch) => {
    return { showModalWindow: (type, location) => dispatch(showModalWindow(type, location)) };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Restricted);
};

export default RestrictedWrapper;
