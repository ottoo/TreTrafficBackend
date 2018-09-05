const Wreck = require('wreck');
const { processVehicleData } = require('./common.js');

const API_URL = 'http://data.itsfactory.fi/journeys/api/1/vehicle-activity';

module.exports = [
  {
    method: 'GET',
    path: '/api/mocks',
    handler: async (_, h) => {
      return h.file('mockvehicles.json');
    }
  },
  {
    method: 'GET',
    path: '/api/lines',
    handler: async request => {
      const lines = request.query.lineRefs;
      const readResponse = async response => processVehicleData(await Wreck.read(response, { json: true }));
      const apiUrl = lines ? `${API_URL}?lineRef=${lines}` : API_URL;

      const response = await Wreck.request('GET', apiUrl);
      return readResponse(response);
    }
  }
];
