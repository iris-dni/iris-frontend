import { Server } from 'hapi';

import render from 'server/render';

/**
 * Start Hapi server on port 8000.
 */
const server = new Server();
server.connection({ port: process.env.PORT || 8000 });

/**
 * Process monitoring
 */
const good = {
  register: require('good'),
  options: {
    reporters: {
      console: [{ module: 'good-console' }, 'stdout']
    }
  }
};

/**
 * Serving static file
 */
const inert = {
  register: require('inert')
};

server.register([good, inert], err => {
  if (err) throw err; // something bad happened loading the plugins
});

/**
 * Attempt to serve static requests from the public folder.
 */
server.route({
  method: '*',
  path: '/{params*}',
  handler: (request, reply) => {
    reply.file('static' + request.path);
  }
});

/**
 * Serve static bundled files, needed for production server
 */
server.route({
  method: 'GET',
  path: '/dist/{param*}',
  handler: {
    directory: {
      path: 'static/dist/'
    }
  }
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

export default {
  start: () => {
    server.start(() => {
      console.log(`==> ✅  ${process.env.NODE_ENV} server is listening`);
      console.log('==> 🌎  Go to ' + server.info.uri.toLowerCase());
    });
  }
};
