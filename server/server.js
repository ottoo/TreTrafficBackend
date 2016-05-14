'use strict';

var Path = require('path');
var Hapi = require('hapi');
var Inert = require('inert');
var H2O2 = require('h2o2');
var Good = require('good');

var routes = require('./routes');

// Create server instance
var server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'data')
            }
        }
    }
});

server.connection({
    port: 3333
});

// Register plugins, routes and start the server
server.register([{
    register: Good,
    options: {
        ops: {
            interval: 1000
        },
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    log: '*',
                    response: '*'
                }]
            }, {
                module: 'good-console'
            }, 'stdout']
        }
    }
}, {
    register: Inert,
    options: {}
}, {
    register: H2O2,
    options: {}
}], function(err) {
    if (err) {
        throw err;
    }

    server.route(routes);

    server.start(function() {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});
