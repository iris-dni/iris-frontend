import path from 'path';

export default (filePath) => {
  const themePath = process.env.THEME_PATH;

  if (!themePath) {
    return {};
  }

  const requirePath = path.join('/', themePath, filePath);

  try {
    const loadedFile = require('../..' + requirePath);
    return loadedFile.default || loadedFile;
  } catch (e) {
    return {};
  }
};
