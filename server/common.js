const processVehicleData = payload => (payload.body ? payload.body.map(val => val.monitoredVehicleJourney) : []);

module.exports = {
  processVehicleData
};
