import React from 'react';
import { Link, IndexLink } from 'react-router';
import Logo from 'components/Logo';
import BurgerMenu from 'components/BurgerMenu';
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
            <IndexLink to='home' className={styles.link}>
              <Logo />
            </IndexLink>

            <BurgerMenu
              wasOpened={this.props.wasOpened}
              opened={this.props.opened}
              onClickHandler={this.props.toggleMobileMenu}
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
