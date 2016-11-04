import React from 'react';
import { connect } from 'react-redux';
import settings from 'settings';
import ReactGA from 'react-ga';
import { fetchWhoAmI } from 'actions/AuthActions';
import Layout from 'views/Layout';

const App = React.createClass({
  componentWillMount () {
    if (__CLIENT__) {
      this.props.fetchWhoAmI();
    }
  },

  componentDidMount () {
    const { googleAnalytics } = settings;

    if (googleAnalytics.APIKey.length) {
      ReactGA.initialize(googleAnalytics.APIKey, googleAnalytics.initOptions);
    }
  },

  render () {
    return <Layout {...this.props} />;
  }
});

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  fetchWhoAmI: () => dispatch(fetchWhoAmI())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
