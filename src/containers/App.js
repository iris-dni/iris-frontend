import React from 'react';
import { connect } from 'react-redux';
import settings from 'settings';
import ReactGA from 'react-ga';
import { fetchWhoAmI } from 'actions/AuthActions';
import logPageview from 'helpers/logPageview';
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

      /* For initial page load.
         Subsequent pageviews are triggered with
         react-router */

      logPageview();
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
