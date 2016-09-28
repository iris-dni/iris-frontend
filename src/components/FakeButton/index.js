import React from 'react';
import { getClassname } from 'components/Button';

const FakeButton = (props) => (
  <span className={getClassname(props)} aria-role={'presentational'}>
    {props.children || props.text}
  </span>
);

export default FakeButton;
