import React from 'react';
import { Link as RouterLink } from 'react-router';
import styles from './link.scss';

const createAttrs = (props) => ({
  [props.external ? 'href' : 'to']: props.href || '#',
  className: (props.className || styles.root),
  onClick: props.onClick
      ? (e) => { e.preventDefault(); props.onClick(e); }
      : () => {}
});

const Link = (props) => (
  props.external
    ? <a {...createAttrs(props)}>
      {props.children || props.text || props.href}
    </a>
    : <RouterLink {...createAttrs(props)}>
      {props.children || props.text || props.href}
    </RouterLink>
);

export default Link;
