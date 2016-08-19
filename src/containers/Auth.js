import React from 'react';
import { connect } from 'react-redux';
import { fetchWhoAmI } from 'actions/AuthActions';

const AuthWrapper = (WrappedComponent) => {
  const Auth = React.createClass({
    getInitialState: () => ({ me: false }),

    componentWillMount () {
      if (__CLIENT__) {
        this.props.fetchWhoAmI();
      }
    },

    render () {
      return <WrappedComponent {...this.props} />;
    }
  });

  const mapStateToProps = (state) => {
    return state;
  };

  const mapDispatchToProps = (dispatch) => {
    return { fetchWhoAmI: () => dispatch(fetchWhoAmI()) };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Auth);
};

export default AuthWrapper;
