import React from 'react';
import { connect } from 'react-redux';
import settings from 'settings';
import ReactGA from 'react-ga';
import WidgetLayout from 'views/Widget';

const App = React.createClass({

  componentDidMount () {
    const { googleAnalytics } = settings;

    if (googleAnalytics.APIKey.length) {
      ReactGA.initialize(googleAnalytics.APIKey, googleAnalytics.initOptions);
    }
  },

  render () {
    return <WidgetLayout {...this.props} />;
  }
});

const mapStateToProps = (state) => {
  return state;
};

export default connect(
  mapStateToProps
)(App);
