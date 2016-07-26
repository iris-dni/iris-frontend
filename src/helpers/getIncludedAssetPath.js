import path from 'path';

export default (filePath) => {
  const basePath = process.env.NODE_ENV === 'production'
    ? ''
    : '//localhost:8080';

  return basePath + path.join('/dist', filePath);
};
