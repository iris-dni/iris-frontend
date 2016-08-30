import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { showModalWindow } from 'actions/ModalActions';
import CheckAuth from 'components/CheckAuth';

const RestrictedWrapper = (WrappedComponent) => {
  const Restricted = withRouter(React.createClass({
    componentWillMount () {
      const { me, location, router } = this.props;

      if (__CLIENT__ && !me.id) {
        if (location.action === 'POP') {
          router.replace(
            `/auth/login?next=${encodeURIComponent(location.pathname)}`
          );
        } else {
          router.goBack();
          this.props.showModalWindow('auth', location);
        }
      }
    },

    render () {
      return (
        <CheckAuth me={this.props.me}>
          <WrappedComponent {...this.props} />
        </CheckAuth>
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
