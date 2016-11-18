import React from 'react';
import settings from 'settings';
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
        <div className={this.getClassName(styles.overlay)}>
          <Overlay
            active={this.props.opened}
            onClickHandler={this.props.closeMobileMenu}
          />
        </div>

        <nav role='navigation' id='navigation' className={styles.navigation}>
          <div className={styles.wrapper}>
            <IndexLink
              to='/'
              className={styles[settings.logoPath ? 'logo-image' : 'logo-text']}
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

          <div className={styles.menu}>
            <MenuItems
              opened={this.props.opened}
              wasOpened={this.props.wasOpened}
              onClickHandler={this.props.closeMobileMenu}
            />
          </div>
        </nav>
      </div>
    );
  }
});

export default Navigation;
