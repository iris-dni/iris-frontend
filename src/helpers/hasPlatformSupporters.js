export default ({ platformSupporters }) =>
  platformSupporters.some(supporter => supporter.name.length && supporter.imageUrl.length);
