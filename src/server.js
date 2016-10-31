import { Server } from 'hapi';
import NunjucksHapi from 'nunjucks-hapi';
import render from 'server/render';
import renderWidget from 'server/renderWidget';
import imageProxy from 'server/imageProxy';
import api from 'server/api';
import httpAuthValidate from 'server/httpAuth';

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

/**
 * Redirect all http requests to https
 */
const hapiRequireHttps = {
  register: require('hapi-require-https')
};

server.register([vision, good, inert, injectThen, h2o2, hapiRequireHttps], err => {
  if (err) throw err; // something bad happened loading the plugins
});

/**
 * Setup basic HTTP auth if enabled
 */

const HTTP_AUTH_ENABLED = process.env.HTTP_AUTH_ENABLED;
if (HTTP_AUTH_ENABLED) {
  server.register(require('hapi-auth-basic'), (err) => {
    server.auth.strategy('simple', 'basic', {
      validateFunc: httpAuthValidate }
    );

    if (err) throw err;
  });
}

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
 * Serve all main routes via react-router render method
 */
server.route({
  method: '*',
  path: '/embed/{params*}',
  config: {
    auth: HTTP_AUTH_ENABLED ? 'simple' : null,
    handler: (req, res, next) => renderWidget(req, res)
  }
});

server.route({
  method: '*',
  path: '/{params*}',
  config: {
    auth: HTTP_AUTH_ENABLED ? 'simple' : null,
    handler: (req, res, next) => render(req, res, 'index')
  }
});

/**
 * Serve image prozy
 */
server.route({
  method: 'GET',
  path: '/images/{params*}',
  config: {
    auth: HTTP_AUTH_ENABLED ? 'simple' : null,
    handler: imageProxy
  }
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
