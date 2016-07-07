import { Server } from 'hapi';
import 'isomorphic-fetch';

import render from 'server/render';

/**
 * Start Hapi server on port 8000.
 */
const server = new Server();
server.connection({ port: process.env.PORT || 8000 });

const options = {
  reporters: {
    console: [{ module: 'good-console' }, 'stdout']
  }
};

server.register({
  register: require('good'),
  options: options
}, err => {
  if (err) {
    throw err; // something bad happened loading the plugin
  }
  server.start(() => {
    console.log('==> ✅  Server is listening');
    console.log('==> 🌎  Go to ' + server.info.uri.toLowerCase());
  });
});

/**
 * Attempt to serve static requests from the public folder.
 */
server.route({
  method: '*',
  path: '/{params*}',
  handler: (request, reply) => reply.file('static' + request.path)
});

/**
 * Catch dynamic requests here to fire-up React Router.
 */
server.ext('onPreResponse', (request, reply) => {
  if (typeof request.response.statusCode !== 'undefined') {
    return reply.continue();
  }

  render(request, reply);
});
