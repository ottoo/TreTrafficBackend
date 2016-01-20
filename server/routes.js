'use strict';

var Wreck = require('wreck');
var API_URL = 'http://data.itsfactory.fi/journeys/api/1/vehicle-activity';

module.exports = [{
    method: 'GET',
    path: '/mocks',
    handler: function(request, reply) {
      return reply.file('mockvehicles.json')
                  .header('Access-Control-Allow-Origin', '*');
    }
  },{
    method: 'GET',
    path: '/api/lines',
    handler: {
      proxy: {
        mapUri: function(request, callback) {
        	if (request.query.filter) {
        		var lines = request.query.filter;
          		callback(null, API_URL + '?lineRef=' + lines);
        	} else {
        		callback(null, API_URL);
        	}
        	
        },
        onResponse: function(err, res, request, reply, settings, ttl) {
          Wreck.read(res, {
            json: true
          }, function(err, payload) {
            reply(payload).header('Access-Control-Allow-Origin', '*');
          });
        }
      }
    }
  }
// {
//     method: 'GET',
//     path: '/{param*}',
//     config: {
//     	auth: false
//     },
//     handler: (request, reply) => {
//            reply.file('./../ReactFrontend/index.html');
//     }
// }
];