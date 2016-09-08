import React from 'react';
import { Link, IndexLink } from 'react-router';
import Logo from 'components/Logo';
import BurgerMenu from 'components/BurgerMenu';
import styles from './navigation.scss';

const isBrowser = (typeof window !== 'undefined');

const NAVIGATION_LINKS = [
  {
    label: 'Browse petitions',
    path: '/petitions'
  },
  {
    label: 'How it works',
    path: '/how-it-works'
  },
  {
    label: 'About',
    path: '/about'
  },
  {
    label: 'Create petition',
    path: '/petitions/new'
  }
];

const Navigation = React.createClass({
  getInitialState () {
    return {
      opened: false,
      wasOpened: false
    };
  },

  resizeHandler: function (e) {
    var windowWidth = (isBrowser ? window.innerWidth : 0);

    if (windowWidth >= 940) {
      this.setState(this.getInitialState);
    }
  },

  componentWillMount: function () {
    this.resizeHandler();
  },
  componentDidMount: function () {
    if (isBrowser) {
      window && window.addEventListener('resize', this.resizeHandler);
    }
  },
  componentWillUnmount: function () {
    if (isBrowser) {
      window && window.removeEventListener('resize', this.resizeHandler);
    }
  },

  getClassName (defaultClass) {
    const opened = this.state.opened
      ? styles.opened
      : this.state.wasOpened
      ? styles.closed
      : '';

    return `${defaultClass} ${opened}`;
  },

  openMenu () {
    this.setState({
      opened: !this.state.opened,
      wasOpened: true
    });
  },

  render () {
    return (
      <div>
        <div className={this.getClassName(styles.overlay)}></div>

        <nav>
          <div className={styles['logo-wrapper']}>
            <IndexLink to='home' className={styles.link}>
              <Logo />
            </IndexLink>

            <BurgerMenu
              wasOpened={this.state.wasOpened}
              opened={this.state.opened}
              onClickHandler={this.openMenu}
            />
          </div>

          <ul className={this.getClassName(styles.list)}>
            {NAVIGATION_LINKS.map((link, key) => (
              <li className={styles.element} key={key}>
                <Link
                  to={link.path}
                  className={styles.link}
                  activeClassName={styles.active}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
});

export default Navigation;
