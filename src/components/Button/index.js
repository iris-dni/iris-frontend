import React from 'react';
import styles from './button.scss';

export const getClassname = ({
  disabled,
  modifier,
  block,
  size,
  brand
}) => ([
  styles[disabled ? 'is-disabled' : (modifier || 'default')],
  styles[block ? 'display-block' : 'display-inline'],
  styles[size ? `size-${size}` : 'size-regular'],
  styles[brand ? `brand-${brand}` : '']
].join(' '));

const Button = (props) => (
  <button
    type={props.type || 'submit'}
    className={getClassname(props)}
    disabled={props.disabled}
    onClick={props.onClick}>
    {props.children || props.text}
  </button>
);

export default Button;
