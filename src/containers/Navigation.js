import React from 'react';
import { connect } from 'react-redux';
import Navigation from 'components/Navigation';
import { menuBreakpoint } from 'components/Navigation/navigation.scss';
import { toggleMenu, resetMenu } from 'actions/NavigationActions';

const isBrowser = (typeof window !== 'undefined');

const NavigationContainer = React.createClass({
  onEscape ({ keyCode }) {
    if (keyCode === 27 && this.props.opened) {
      this.props.toggleMenu();
    }
  },
  resizeHandler (e) {
    var windowWidth = (isBrowser ? window.innerWidth : 0);

    if (windowWidth >= parseInt(menuBreakpoint, 10)) {
      this.props.resetMenu();
    }
  },

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
  toggleMenu: () => dispatch(toggleMenu()),
  resetMenu: () => dispatch(resetMenu())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationContainer);
