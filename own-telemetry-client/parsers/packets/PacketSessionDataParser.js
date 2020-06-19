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
exports.PacketSessionDataParser = void 0;
var F1Parser_1 = require("../F1Parser");
var MarshalZoneParser_1 = require("./MarshalZoneParser");
var PacketHeaderParser_1 = require("./PacketHeaderParser");
var PacketSessionDataParser = /** @class */ (function (_super) {
    __extends(PacketSessionDataParser, _super);
    function PacketSessionDataParser(buffer, packetFormat) {
        var _this = _super.call(this) || this;
        _this.endianess('little')
            .nest('m_header', { type: new PacketHeaderParser_1.PacketHeaderParser(packetFormat) })
            .uint8('m_weather')
            .int8('m_trackTemperature')
            .int8('m_airTemperature')
            .uint8('m_totalLaps')
            .uint16('m_trackLength')
            .uint8('m_sessionType')
            .int8('m_trackId');
        if (packetFormat === 2018) {
            _this.uint8('m_era');
        }
        else if (packetFormat === 2019) {
            _this.uint8('m_formula');
        }
        _this.uint16('m_sessionTimeLeft')
            .uint16('m_sessionDuration')
            .uint8('m_pitSpeedLimit')
            .uint8('m_gamePaused')
            .uint8('m_isSpectating')
            .uint8('m_spectatorCarIndex')
            .uint8('m_sliProNativeSupport')
            .uint8('m_numMarshalZones')
            .array('m_marshalZones', { length: 21, type: new MarshalZoneParser_1.MarshalZoneParser() })
            .uint8('m_safetyCarStatus')
            .uint8('m_networkGame');
        _this.data = _this.fromBuffer(buffer);
        return _this;
    }
    return PacketSessionDataParser;
}(F1Parser_1.F1Parser));
exports.PacketSessionDataParser = PacketSessionDataParser;
