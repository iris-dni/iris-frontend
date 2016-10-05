import React from 'react';
import { IndexLink } from 'react-router';
import { debounce } from 'lodash';
import Overlay from 'components/Overlay';
import Logo from 'components/Logo';
import MenuItems from 'components/MenuItems';
import MenuTrigger from 'components/MenuTrigger';
import styles from './navigation.scss';

const Navigation = React.createClass({
  getClassName (defaultClass) {
    const opened = this.props.opened
      ? styles.opened
      : this.props.wasOpened
      ? styles.closed
      : '';

    return `${defaultClass} ${opened}`;
  },

  resizeHandler: debounce(function resize () {
    const windowWidth = (__CLIENT__ ? window.innerWidth : null);

    if (windowWidth >= parseInt(styles.menuBreakpoint, 10)) {
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
      <div>
        <div className={this.getClassName(styles['overlay-wrapper'])}>
          <Overlay
            active={this.props.opened}
            onClickHandler={this.props.closeMobileMenu}
          />
        </div>

        <nav>
          <div className={styles['visible-elements-wrapper']}>
            <IndexLink
              to='/'
              className={styles.link}
              onClick={this.props.closeMobileMenu}
            >
              <Logo />
            </IndexLink>

            <MenuTrigger
              opened={this.props.opened}
              wasOpened={this.props.wasOpened}
              onClickHandler={this.props.toggleMobileMenu}
            />
          </div>

          <MenuItems
            opened={this.props.opened}
            wasOpened={this.props.wasOpened}
            onClickHandler={this.props.closeMobileMenu}
          />
        </nav>
      </div>
    );
  }
});

export default Navigation;
