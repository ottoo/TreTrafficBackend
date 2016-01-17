'use strict';

var Wreck = require('wreck');
var API_URL = 'http://data.itsfactory.fi/journeys/api/1/vehicle-activity';

module.exports = [{
    method: 'GET',
    path: '/lines',
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
            reply(payload);
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