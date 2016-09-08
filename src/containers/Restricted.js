import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { showModalWindow } from 'actions/ModalActions';
import Loading from 'components/Loading';

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
          this.props.showModalWindow({ type: 'auth' }, location);
        }
      }
    },

    render () {
      return (
        <Loading isLoading={this.props.me.isLoading}>
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
