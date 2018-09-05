const Wreck = require('wreck');
const { processVehicleData } = require('./common.js');

const API_URL = 'http://data.itsfactory.fi/journeys/api/1/vehicle-activity';

module.exports = [
  {
    method: 'GET',
    path: '/api/mocks',
    handler(request, reply) {
      return reply.file('mockvehicles.json').header('Access-Control-Allow-Origin', '*');
    }
  },
  {
    method: 'GET',
    path: '/api/lines',
    handler(request, reply) {
      const callback = (err, res) => {
        Wreck.read(
          res,
          {
            json: true
          },
          (err, payload) => {
            reply(processVehicleData(payload)).header('Access-Control-Allow-Origin', '*');
          }
        );
      };

      if (request.query.lineRefs) {
        const lines = request.query.lineRefs;
        Wreck.request('GET', `${API_URL}?lineRef=${lines}`, null, callback);
      } else {
        Wreck.request('GET', API_URL, null, callback);
      }
    }
  }
];
