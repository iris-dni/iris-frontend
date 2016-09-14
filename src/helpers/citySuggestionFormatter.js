export default (suggestion) => {
  return (suggestion && suggestion.name && suggestion.zips)
    ? `${suggestion.name} - ${suggestion.zips[0]}`
    : '';
};
