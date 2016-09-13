export default (suggestion) => {
  return (suggestion.name && suggestion.zips)
    ? `${suggestion.name} - ${suggestion.zips[0]}`
    : '';
};
