'use strict';

var Hapi = require('hapi');
var HapiJwt2 = require('hapi-auth-jwt2');
var Inert = require('inert');
var H2O2 = require('h2o2');
var Good = require('good');
var _ = require('lodash');

var routes = require('./routes');

// Create server instance
var server = new Hapi.Server();
server.connection({
    port: 3333
});

// Register plugins, routes and start the server
server.register([{
    register: Good,
    options: {
        reporters: [{
            reporter: require('good-console'),
            events: {
                response: '*',
                log: '*'
            }
        }]
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