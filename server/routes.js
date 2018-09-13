const Wreck = require('wreck');
const { processVehicleData, processLines } = require('./common.js');

const VEHICLE_ACTIVITY_API_URL = 'http://data.itsfactory.fi/journeys/api/1/vehicle-activity';
const LINES_API_URL = 'http://data.itsfactory.fi/journeys/api/1/lines';

const readResponse = async response => Wreck.read(response, { json: true });

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
    path: '/api/vehicle-activity',
    handler: async request => {
      const lines = request.query.lineRef;
      const apiUrl = lines ? `${VEHICLE_ACTIVITY_API_URL}?lineRef=${lines}` : VEHICLE_ACTIVITY_API_URL;

      const response = await Wreck.request('GET', apiUrl);
      return processVehicleData(await readResponse(response));
    }
  },
  {
    method: 'GET',
    path: '/api/lines',
    handler: async () => {
      const response = await Wreck.request('GET', LINES_API_URL);
      return processLines(await readResponse(response));
    }
  }
];
