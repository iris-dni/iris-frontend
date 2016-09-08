import React from 'react';
import { IndexLink } from 'react-router';
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

  render () {
    return (
      <div>
        <div className={this.getClassName(styles.overlay)}></div>

        <nav>
          <div className={styles['unhidden-wrapper']}>
            <IndexLink
              to='home'
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
