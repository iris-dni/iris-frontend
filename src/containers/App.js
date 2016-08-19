import React from 'react';
import { connect } from 'react-redux';
import { fetchWhoAmI } from 'actions/AuthActions';
import Layout from 'views/Layout';

const App = React.createClass({
  componentWillMount () {
    if (__CLIENT__) {
      this.props.fetchWhoAmI();
    }
  },

  render () {
    return <Layout {...this.props} />;
  }
});

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  fetchWhoAmI: () => dispatch(fetchWhoAmI())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
