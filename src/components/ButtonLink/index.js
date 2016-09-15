import React from 'react';
import Link from 'components/Link';
import { getClassname } from 'components/Button';

const ButtonLink = (props) => (
  <Link
    className={getClassname(props)}
    {...props}
  />
);

export default ButtonLink;
