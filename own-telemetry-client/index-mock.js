"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var axios_1 = require("axios");
var telemtry_client_1 = require("./telemetry-client/telemtry-client");
var PACKETS = telemtry_client_1.constants.PACKETS;
var client = new telemtry_client_1.F1TelemetryClient({ port: 20777 });
function mapToJoinedType(participants, lapData) {
    var data = [];
    for (var i = 0; i < participants.length; i++) {
        data.push(__assign(__assign({}, lapData[i]), participants[i]));
    }
    return data;
}
function getNewData() {
    var lapData = [
        { m_bestLapTime: Math.floor(Math.random() * 100) + 1, m_carPosition: Math.floor(Math.random() * 100) + 1, m_lastLapTime: Math.floor(Math.random() * 100) + 1, m_penalties: Math.floor(Math.random() * 20) + 1 },
        { m_bestLapTime: Math.floor(Math.random() * 100) + 1, m_carPosition: Math.floor(Math.random() * 100) + 1, m_lastLapTime: Math.floor(Math.random() * 100) + 1, m_penalties: Math.floor(Math.random() * 20) + 1 },
        { m_bestLapTime: Math.floor(Math.random() * 100) + 1, m_carPosition: Math.floor(Math.random() * 100) + 1, m_lastLapTime: Math.floor(Math.random() * 100) + 1, m_penalties: Math.floor(Math.random() * 20) + 1 },
        { m_bestLapTime: Math.floor(Math.random() * 100) + 1, m_carPosition: Math.floor(Math.random() * 100) + 1, m_lastLapTime: Math.floor(Math.random() * 100) + 1, m_penalties: Math.floor(Math.random() * 20) + 1 },
        { m_bestLapTime: Math.floor(Math.random() * 100) + 1, m_carPosition: Math.floor(Math.random() * 100) + 1, m_lastLapTime: Math.floor(Math.random() * 100) + 1, m_penalties: Math.floor(Math.random() * 20) + 1 },
        { m_bestLapTime: Math.floor(Math.random() * 100) + 1, m_carPosition: Math.floor(Math.random() * 100) + 1, m_lastLapTime: Math.floor(Math.random() * 100) + 1, m_penalties: Math.floor(Math.random() * 20) + 1 },
        { m_bestLapTime: Math.floor(Math.random() * 100) + 1, m_carPosition: Math.floor(Math.random() * 100) + 1, m_lastLapTime: Math.floor(Math.random() * 100) + 1, m_penalties: Math.floor(Math.random() * 20) + 1 },
        { m_bestLapTime: Math.floor(Math.random() * 100) + 1, m_carPosition: Math.floor(Math.random() * 100) + 1, m_lastLapTime: Math.floor(Math.random() * 100) + 1, m_penalties: Math.floor(Math.random() * 20) + 1 },
        { m_bestLapTime: Math.floor(Math.random() * 100) + 1, m_carPosition: Math.floor(Math.random() * 100) + 1, m_lastLapTime: Math.floor(Math.random() * 100) + 1, m_penalties: Math.floor(Math.random() * 20) + 1 },
        { m_bestLapTime: Math.floor(Math.random() * 100) + 1, m_carPosition: Math.floor(Math.random() * 100) + 1, m_lastLapTime: Math.floor(Math.random() * 100) + 1, m_penalties: Math.floor(Math.random() * 20) + 1 },
    ];
    var participants = [
        { m_name: "participant1", m_nationality: Math.floor(Math.random() * 83) + 1, m_aiControlled: 0 },
        { m_name: "participant2", m_nationality: Math.floor(Math.random() * 83) + 1, m_aiControlled: 0 },
        { m_name: "participant3", m_nationality: Math.floor(Math.random() * 83) + 1, m_aiControlled: 0 },
        { m_name: "participant4", m_nationality: Math.floor(Math.random() * 83) + 1, m_aiControlled: 0 },
        { m_name: "participant5", m_nationality: Math.floor(Math.random() * 83) + 1, m_aiControlled: 1 },
        { m_name: "participant6", m_nationality: Math.floor(Math.random() * 83) + 1, m_aiControlled: 0 },
        { m_name: "participant7", m_nationality: Math.floor(Math.random() * 83) + 1, m_aiControlled: 0 },
        { m_name: "participant8", m_nationality: Math.floor(Math.random() * 83) + 1, m_aiControlled: 1 },
        { m_name: "participant9", m_nationality: Math.floor(Math.random() * 83) + 1, m_aiControlled: 0 },
        { m_name: "participant10", m_nationality: Math.floor(Math.random() * 83) + 1, m_aiControlled: 1 },
    ];
    return mapToJoinedType(participants, lapData);
}
var timerId = setInterval(function () {
    var data = getNewData();
    axios_1["default"].post("https://f1-api.cratory.de/data", data);
}, 60000);
setTimeout(function () { clearInterval(timerId); console.log('update stopped'); }, 600000);
