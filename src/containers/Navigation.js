import React from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import Navigation from 'components/Navigation';
import { menuBreakpoint } from 'components/Navigation/navigation.scss';
import {
  toggleMobileMenu,
  closeMobileMenu,
  destroyMobileMenu
} from 'actions/NavigationActions';

const NavigationContainer = React.createClass({
  resizeHandler: debounce(function () {
    var windowWidth = (__CLIENT__ ? window.innerWidth : null);

    if (windowWidth >= parseInt(menuBreakpoint, 10)) {
      this.props.destroyMobileMenu();
    }
  }, 300),

  componentWillMount () {
    this.resizeHandler();
  },
  componentDidMount () {
    if (__CLIENT__) {
      window.addEventListener('resize', this.resizeHandler);
    }
  },
  componentWillUnmount () {
    if (__CLIENT__) {
      window.removeEventListener('resize', this.resizeHandler);
    }
  },

  render () {
    return (
      <Navigation {...this.props} />
    );
  }
});

NavigationContainer.propTypes = {
  opened: React.PropTypes.bool,
  wasOpened: React.PropTypes.bool
};

export const mapStateToProps = ({ navigation }) => ({
  opened: navigation.opened,
  wasOpened: navigation.wasOpened
});

export const mapDispatchToProps = (dispatch) => ({
  toggleMobileMenu: () => dispatch(toggleMobileMenu()),
  closeMobileMenu: () => dispatch(closeMobileMenu()),
  destroyMobileMenu: () => dispatch(destroyMobileMenu())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  // See “My views aren’t updating when something changes outside of Redux"
  // section on:
  // https://github.com/reactjs/react-redux/blob/master/docs/troubleshooting.md
  {pure: false}
)(NavigationContainer);
