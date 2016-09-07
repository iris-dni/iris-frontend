import React from 'react';
import { Link, IndexLink } from 'react-router';
import Container from 'components/Container';
import Logo from 'components/Logo';
import styles from './navigation.scss';

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
      <nav className={styles.root}>
        <div className={this.getClassName(styles.overlay)}></div>

        <Container>
          <div className={styles['menu-wrapper']}>
            <div className={styles['logo-wrapper']}>
              <IndexLink to='home' className={styles.link}>
                <Logo />
              </IndexLink>

              <div
                className={this.getClassName(styles['burger-wrapper'])}
                onClick={this.openMenu}
              >
                <span>Menu</span>

                <div className={styles['burger-menu']}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
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
          </div>
        </Container>
      </nav>
    );
  }
});

export default Navigation;
