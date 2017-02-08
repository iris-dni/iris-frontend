let RESPONSE_BODY = 'OK';

export default (request, reply) => {
  let code = 200;
  if (request.method === 'post') {
    RESPONSE_BODY = request.query.body || 'OK';
  } else {
    if (RESPONSE_BODY !== 'OK') {
      code = 503;
    }
  }
  return reply(RESPONSE_BODY)
    .code(code)
    .type('text/plain; charset=UTF-8');
};
