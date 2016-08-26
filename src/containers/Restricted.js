import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { showModalWindow } from 'actions/ModalActions';

const RestrictedWrapper = (WrappedComponent) => {
  const Restricted = withRouter(React.createClass({
    componentWillMount () {
      if (__CLIENT__ && !this.props.me) {
        if (this.props.location.action === 'POP') {
          this.props.router.replace(
            `/auth/login?next=${encodeURIComponent(this.props.location.pathname)}`
          );
        } else {
          this.props.router.goBack();
          this.props.showModalWindow();
        }
      }
    },

    render () {
      if (this.props.me) {
        return <WrappedComponent {...this.props} />;
      }

      return null;
    }
  }));

  const mapStateToProps = (state) => (state);

  const mapDispatchToProps = (dispatch) => {
    return { showModalWindow: () => dispatch(showModalWindow()) };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Restricted);
};

export default RestrictedWrapper;
