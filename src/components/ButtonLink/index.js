import React from 'react';
import { Link } from 'react-router';
import { getClassname } from 'components/Button';

const createAttrs = (props) => {
  return {
    [props.external ? 'href' : 'to']: props.href || '#',
    onClick: props.onClick
      ? (e) => { e.preventDefault(); props.onClick(); }
      : () => {},
    className: getClassname(props)
  };
};

const ButtonLink = (props) => (
  props.external
    ? <a {...createAttrs(props)}>{props.children || props.text}</a>
    : <Link {...createAttrs(props)}>{props.children || props.text}</Link>
);

export default ButtonLink;
