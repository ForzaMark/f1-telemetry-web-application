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
exports.CarStatusDataParser = void 0;
var binary_parser_1 = require("binary-parser");
var F1Parser_1 = require("../F1Parser");
var CarStatusDataParser = /** @class */ (function (_super) {
    __extends(CarStatusDataParser, _super);
    function CarStatusDataParser(packetFormat) {
        var _this = _super.call(this) || this;
        _this.uint8('m_tractionControl')
            .uint8('m_antiLockBrakes')
            .uint8('m_fuelMix')
            .uint8('m_frontBrakeBias')
            .uint8('m_pitLimiterStatus')
            .floatle('m_fuelInTank')
            .floatle('m_fuelCapacity');
        if (packetFormat === 2019) {
            _this.floatle('m_fuelRemainingLaps');
        }
        _this.uint16le('m_maxRPM')
            .uint16le('m_idleRPM')
            .uint8('m_maxGears')
            .uint8('m_drsAllowed')
            .array('m_tyresWear', {
            length: 4,
            type: new binary_parser_1.Parser().uint8('')
        });
        if (packetFormat === 2019) {
            _this.uint8('m_actualTyreCompound').uint8('m_tyreVisualCompound');
        }
        else {
            _this.uint8('m_tyreCompound');
        }
        _this.array('m_tyresDamage', {
            length: 4,
            type: new binary_parser_1.Parser().uint8('')
        })
            .uint8('m_frontLeftWingDamage')
            .uint8('m_frontRightWingDamage')
            .uint8('m_rearWingDamage')
            .uint8('m_engineDamage')
            .uint8('m_gearBoxDamage');
        if (packetFormat === 2019) {
            _this.int8('m_vehicleFiaFlags');
        }
        else {
            _this.uint8('m_exhaustDamage').int8('m_vehicleFiaFlags');
        }
        _this.floatle('m_ersStoreEnergy')
            .uint8('m_ersDeployMode')
            .floatle('m_ersHarvestedThisLapMGUK')
            .floatle('m_ersHarvestedThisLapMGUH')
            .floatle('m_ersDeployedThisLap');
        return _this;
    }
    return CarStatusDataParser;
}(F1Parser_1.F1Parser));
exports.CarStatusDataParser = CarStatusDataParser;
