export default (values, petition) => ({
  petition: Object.assign({}, { id: petition.id }, values)
});
