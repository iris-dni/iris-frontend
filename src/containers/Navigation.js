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

const isBrowser = (typeof window !== 'undefined');

const NavigationContainer = React.createClass({
  onEscape ({ keyCode }) {
    if (keyCode === 27 && this.props.opened) {
      this.props.toggleMobileMenu();
    }
  },
  resizeHandler: debounce(function () {
    var windowWidth = (isBrowser ? window.innerWidth : null);

    if (windowWidth >= parseInt(menuBreakpoint, 10)) {
      this.props.destroyMobileMenu();
    }
  }, 300),

  componentDidUpdate () {
    if (this.props.opened) {
      document.documentElement.classList.add('disabled-scroll');
    } else {
      document.documentElement.classList.remove('disabled-scroll');
    }
  },

  componentWillMount () {
    this.resizeHandler();
  },
  componentDidMount () {
    if (isBrowser) {
      window.addEventListener('resize', this.resizeHandler);
      document.addEventListener('keydown', this.onEscape);
    }
  },
  componentWillUnmount () {
    if (isBrowser) {
      window.removeEventListener('resize', this.resizeHandler);
      document.removeEventListener('keydown', this.onEscape);
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
  mapDispatchToProps
)(NavigationContainer);
