"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.DEFAULT_PORT = exports.packetTypes = exports.constantsTypes = exports.constants = exports.F1TelemetryClient = void 0;
var dgram = require("dgram");
var events_1 = require("events");
var constants = require("../constants");
exports.constants = constants;
var constantsTypes = require("../constants/types");
exports.constantsTypes = constantsTypes;
var packets_1 = require("../parsers/packets");
var packetTypes = require("../parsers/packets/types");
exports.packetTypes = packetTypes;
var DEFAULT_PORT = 20777;
exports.DEFAULT_PORT = DEFAULT_PORT;
/**
 *
 */
var F1TelemetryClient = /** @class */ (function (_super) {
    __extends(F1TelemetryClient, _super);
    function F1TelemetryClient(opts) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this) || this;
        var _a = opts.port, port = _a === void 0 ? DEFAULT_PORT : _a;
        _this.port = port;
        _this.client = dgram.createSocket('udp4');
        return _this;
    }
    /**
     *
     * @param {Buffer} buffer
     */
    // tslint:disable-next-line:no-any
    F1TelemetryClient.parsePacketHeader = function (buffer) {
        var packetFormatParser = new packets_1.PacketFormatParser();
        var m_packetFormat = packetFormatParser.fromBuffer(buffer).m_packetFormat;
        var packetHeaderParser = new packets_1.PacketHeaderParser(m_packetFormat);
        return packetHeaderParser.fromBuffer(buffer);
    };
    /**
     *
     * @param {Number} packetId
     */
    F1TelemetryClient.getParserByPacketId = function (packetId) {
        var PACKETS = constants.PACKETS;
        var packetKeys = Object.keys(PACKETS);
        var packetType = packetKeys[packetId];
        switch (packetType) {
            case PACKETS.session:
                return packets_1.PacketSessionDataParser;
            case PACKETS.motion:
                return packets_1.PacketMotionDataParser;
            case PACKETS.lapData:
                return packets_1.PacketLapDataParser;
            case PACKETS.event:
                return packets_1.PacketEventDataParser;
            case PACKETS.participants:
                return packets_1.PacketParticipantsDataParser;
            case PACKETS.carSetups:
                return packets_1.PacketCarSetupDataParser;
            case PACKETS.carTelemetry:
                return packets_1.PacketCarTelemetryDataParser;
            case PACKETS.carStatus:
                return packets_1.PacketCarStatusDataParser;
            default:
                return null;
        }
    };
    /**
     *
     * @param {Buffer} message
     */
    F1TelemetryClient.prototype.parseMessage = function (message) {
        var _a = F1TelemetryClient.parsePacketHeader(message), m_packetFormat = _a.m_packetFormat, m_packetId = _a.m_packetId;
        var parser = F1TelemetryClient.getParserByPacketId(m_packetId);
        if (!parser) {
            return;
        }
        var packetData = new parser(message, m_packetFormat);
        var packetKeys = Object.keys(constants.PACKETS);
        this.emit(packetKeys[m_packetId], packetData.data);
    };
    /**
     * Method to start listening for packets
     */
    F1TelemetryClient.prototype.start = function () {
        var _this = this;
        if (!this.client) {
            return;
        }
        this.client.on('listening', function () {
            if (!_this.client) {
                return;
            }
            var address = _this.client.address();
            console.log("UDP Client listening on " + address.address + ":" + address.port + " \uD83C\uDFCE");
            _this.client.setBroadcast(true);
        });
        this.client.on('message', function (m) { return _this.parseMessage(m); });
        this.client.bind(this.port);
    };
    /**
     * Method to close the client
     */
    F1TelemetryClient.prototype.stop = function () {
        var _this = this;
        if (!this.client) {
            return;
        }
        return this.client.close(function () {
            console.log("UDP Client closed \uD83C\uDFC1");
            _this.client = undefined;
        });
    };
    return F1TelemetryClient;
}(events_1.EventEmitter));
exports.F1TelemetryClient = F1TelemetryClient;
