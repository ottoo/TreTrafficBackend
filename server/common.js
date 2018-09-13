const processVehicleData = payload => (payload.body ? payload.body.map(val => val.monitoredVehicleJourney) : []);

const processLines = payload => payload.body ? payload.body.map(({ name, description }) => ({
  name,
  description
})) : [];

module.exports = {
  processVehicleData,
  processLines
};
