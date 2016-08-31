import React from 'react';
import styles from './button.scss';

export const getClassname = ({ disabled, modifier, fill }) => {
  return [
    styles[disabled ? 'disabled' : (modifier || 'default')],
    styles[fill ? 'block' : 'inline']
  ].join(' ');
};

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
