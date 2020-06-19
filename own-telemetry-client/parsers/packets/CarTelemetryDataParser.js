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
exports.CarTelemetryDataParser = void 0;
var binary_parser_1 = require("binary-parser");
var F1Parser_1 = require("../F1Parser");
var CarTelemetryDataParser = /** @class */ (function (_super) {
    __extends(CarTelemetryDataParser, _super);
    function CarTelemetryDataParser(packetFormat) {
        var _this = _super.call(this) || this;
        _this.uint16le('m_speed');
        if (packetFormat === 2018) {
            _this.uint8('m_throttle').int8('m_steer').uint8('m_brake');
        }
        else if (packetFormat === 2019) {
            _this.floatle('m_throttle').floatle('m_steer').floatle('m_brake');
        }
        _this.uint8('m_clutch')
            .int8('m_gear')
            .uint16le('m_engineRPM')
            .uint8('m_drs')
            .uint8('m_revLightsPercent')
            .array('m_brakesTemperature', {
            length: 4,
            type: new binary_parser_1.Parser().uint16le('')
        })
            .array('m_tyresSurfaceTemperature', {
            length: 4,
            type: new binary_parser_1.Parser().uint16le('')
        })
            .array('m_tyresInnerTemperature', {
            length: 4,
            type: new binary_parser_1.Parser().uint16le('')
        })
            .uint16le('m_engineTemperature')
            .array('m_tyresPressure', {
            length: 4,
            type: new binary_parser_1.Parser().floatle('')
        });
        if (packetFormat === 2019) {
            _this.array('m_surfaceType', {
                length: 4,
                type: new binary_parser_1.Parser().uint8('')
            });
        }
        return _this;
    }
    return CarTelemetryDataParser;
}(F1Parser_1.F1Parser));
exports.CarTelemetryDataParser = CarTelemetryDataParser;
