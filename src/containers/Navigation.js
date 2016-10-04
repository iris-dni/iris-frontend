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
  mapDispatchToProps
)(NavigationContainer);
