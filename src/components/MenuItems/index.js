import React from 'react';
import settings from 'settings';
import { Link } from 'react-router';
import styles from './menu-items.scss';

const MenuItems = React.createClass({
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
      <ul className={this.getClassName(styles.list)}>
        {settings.navigationLinks.map((link, key) => (
          <li className={styles.element} key={key}>
            <Link
              to={link.path}
              className={styles.link}
              activeClassName={styles.active}
              onClick={this.props.onClickHandler}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
});

export default MenuItems;
