const processVehicleData = payload => payload.body.map(val => val.monitoredVehicleJourney);

module.exports = {
  processVehicleData
};
