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
    const { ga } = settings;
    const { pathname } = window.location;

    /* For initial page load.
       Subsequent pageviews are triggered with
       react-router and use `logPageView` */

    if (ga.APIKey.length) {
      ReactGA.initialize(ga.APIKey, ga.initOptions);
      ReactGA.set({ page: pathname });
      ReactGA.pageview(pathname);
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
