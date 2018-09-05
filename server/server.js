const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');
const H2O2 = require('h2o2');
const Good = require('good');

const routes = require('./routes');

// Create server instance
const server = new Hapi.Server({
  host: '0.0.0.0',
  port: 3333,
  routes: {
    files: {
      relativeTo: Path.join(__dirname, 'data')
    }
  }
});

const init = async () => {
  // Register plugins, routes and start the server
  await server.register([
    {
      plugin: Good,
      options: {
        reporters: {
          console: [
            {
              module: 'good-squeeze',
              name: 'Squeeze',
              args: [
                {
                  log: '*',
                  response: '*'
                }
              ]
            },
            {
              module: 'good-console'
            },
            'stdout'
          ]
        }
      }
    },
    {
      plugin: Inert
    },
    {
      plugin: H2O2
    }
  ]);

  server.route(routes);

  await server.start();
  server.log('info', `Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();
