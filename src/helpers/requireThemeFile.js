import path from 'path';

export default (filePath) => {
  const themePath = process.env.THEME_PATH;

  if (!themePath) {
    return {};
  }

  const requirePath = path.resolve(`${themePath}/${filePath}`);
  try {
    const loadedFile = require(requirePath);
    if (typeof loadedFile === 'object' && loadedFile.default) {
      return loadedFile.default;
    }
    return loadedFile;
  } catch (e) {
    return {};
  }
};
