'use strict';

var Wreck = require('wreck');
var API_URL = 'http://data.itsfactory.fi/journeys/api/1/vehicle-activity';

module.exports = [{
    method: 'GET',
    path: '/api/mocks',
    handler: function(request, reply) {
        return reply.file('mockvehicles.json')
            .header('Access-Control-Allow-Origin', '*');
    }
}, {
    method: 'GET',
    path: '/api/lines',
    handler: function(request, reply) {
        var callback = function(err, res) {
            Wreck.read(res, {
                json: true
            }, function(err, payload) {
                reply(payload).header('Access-Control-Allow-Origin', '*');
            });
        };

        if (request.query.filter) {
            var lines = request.query.filter;
            Wreck.request('GET', API_URL + '?lineRef=' + lines, null, callback);
        } else {
            Wreck.request('GET', API_URL, null, callback);
        }
    }
}];
