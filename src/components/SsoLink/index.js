import React from 'react';

const baseUrl = () => {
  if (!process.env.BASE_URL) {
    throw new Error('Please define a BASE_URL in .env');
  }

  return process.env.BASE_URL;
};

const SsoLink = ({ provider: { name, loginUrl }, location: { pathname, search } }) => {
  const delimiter = loginUrl.indexOf('?') < 0 ? '?' : '&';
  const returnUrl = encodeURIComponent(`${baseUrl()}${pathname}${decodeURIComponent(search)}`);
  const url = `${loginUrl}${delimiter}irisreturl=${returnUrl}`;

  return (
    <a href={url}>{name}</a>
  );
};

export default SsoLink;
