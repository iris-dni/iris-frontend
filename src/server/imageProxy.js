export default (request, reply) => {
  // const { params, query } = request;
  reply.redirect('http://google.co.uk').code(301);
};
