const TRANSLITERATIONS = {
  'ä': 'ae',
  'ö': 'oe',
  'ü': 'ue',
  'ß': 'ss'
};

const transliterateChars = RegExp(Object.keys(TRANSLITERATIONS).join('|'), 'g');
const transliterate = (char) => TRANSLITERATIONS[char];

export default (text) => {
  const separator = '-';
  const nonUrlChars = /[^a-z0-9]+/g;

  return text
    .toLowerCase()
    .replace(transliterateChars, transliterate)
    .replace(nonUrlChars, ' ')
    .trim()
    .replace(/ /g, separator);
};
