import React from 'react';
import { connect } from 'react-redux';
import Navigation from 'components/Navigation';
import {
  toggleMobileMenu,
  closeMobileMenu,
  destroyMobileMenu
} from 'actions/NavigationActions';

const NavigationContainer = (props) => (
  <Navigation {...props} />
);

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
  // For activeClassname to work in react-router so we can highlight
  // the current section in the navigation. See comment here:
  // https://github.com/ReactTraining/react-router/issues/3286#issuecomment-219488281
  // Also “My views aren’t updating when something changes outside of Redux”:
  // https://github.com/reactjs/react-redux/blob/master/docs/troubleshooting.md
  { pure: false }
)(NavigationContainer);
