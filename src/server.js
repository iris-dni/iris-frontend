import { Server } from 'hapi';
import NunjucksHapi from 'nunjucks-hapi';
import render from 'server/render';
import api from 'server/api';

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

/**
 * Promise wrapper for Hapi's server.inject.
 * Used in tests
 */
const injectThen = {
  register: require('inject-then')
};

/**
 * Vision
 */
const vision = {
  register: require('vision')
};

/**
 * h2o2
 */
const h2o2 = {
  register: require('h2o2')
};

server.register([vision, good, inert, injectThen, h2o2], err => {
  if (err) throw err; // something bad happened loading the plugins
});

/**
 * Configure Nunjucks templating engine
 */
server.views({
  engines: {
    html: NunjucksHapi
  },
  path: 'static/dist/'
});

/**
 * Serve all routes via react-router render method
 */
server.route({
  method: '*',
  path: '/{params*}',
  handler: render
});

/**
 * Serve static bundled files, needed for production server
 */
server.route({
  method: 'GET',
  path: '/dist/{params*}',
  handler: {
    directory: {
      path: 'static/dist/'
    }
  }
});

/**
 * Proxy API requests to real API_URL
 */
server.route({
  method: '*',
  path: '/api/{path*}',
  handler: api,
  config: {
    payload: {
      parse: false
    }
  }
});

export default server;
