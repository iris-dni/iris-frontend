import render from './render';
import confirmRepository from 'services/api/repositories/confirm';

export default (request, reply) => {
  const { params, query } = request;
  const { action } = params;
  const { key } = query;

  if (action === 'supporter' || action === 'petition') {
    confirmRepository.validate(key)
      .then((response) => render(request, reply, 'index'))
      .catch(() => reply('Invalid key').code(500));
  } else {
    reply('Not found').code(404);
  }
};
