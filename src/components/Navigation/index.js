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

const Navigation = () => (
  <nav className={styles.root}>
    <Container>
      <div className={styles['logo-wrapper']}>
        <IndexLink to='home' className={styles.link}>
          <Logo />
        </IndexLink>
      </div>

      <div className={styles['burger-menu']}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={styles.list}>
        {NAVIGATION_LINKS.map((link, key) => (
          <li className={styles.element} key={key}>
            <Link
              to={link.path}
              className={styles.link}
              activeClassName={styles.active}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  </nav>
);

export default Navigation;
