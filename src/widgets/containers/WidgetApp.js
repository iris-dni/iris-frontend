import React from 'react';
import { connect } from 'react-redux';
import Widget from 'views/Widget';

const App = React.createClass({
  render () {
    return <Widget {...this.props} />;
  }
});

const mapStateToProps = (state) => {
  return state;
};

export default connect(
  mapStateToProps
)(App);
