import render from './render';
import { get } from 'lodash/object';
import confirmRepository from 'services/api/repositories/confirm';

const addServerRequestProps = (request, props) => Object.assign(
  {}, request, { serverProps: props }
);

export default (request, reply) => {
  const { params, query } = request;
  const { action } = params;
  const { key } = query;

  if (action === 'supporter' || action === 'petition') {
    confirmRepository.validate(key)
      .then((response) => render(request, reply, 'index'))
      .catch((error) => {
        const statusCode = get(error, 'response.data.error.code', 500);
        switch (statusCode) {
          case 404:
            return render(
              addServerRequestProps(request, { confirmation: { invalidKey: true } }),
            reply, 'index');
          case 400:
            return render(
              addServerRequestProps(request, { confirmation: { emailConfirmed: true } }),
            reply, 'index');
          default:
            reply('Something went wrong').code(500);
        }
      });
  } else {
    reply('Not found').code(404);
  }
};
