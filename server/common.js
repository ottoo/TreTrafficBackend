'use strict';

var _ = require('lodash');

module.exports = {
    processVehicleData: processVehicleData
};

function processVehicleData(payload) {
    let vehicleData = _.map(payload.body, (val) => {
        return val.monitoredVehicleJourney;
    });
    return vehicleData;
}
