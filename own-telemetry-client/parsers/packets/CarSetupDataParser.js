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
exports.CarSetupDataParser = void 0;
var F1Parser_1 = require("../F1Parser");
var CarSetupDataParser = /** @class */ (function (_super) {
    __extends(CarSetupDataParser, _super);
    function CarSetupDataParser() {
        var _this = _super.call(this) || this;
        _this.uint8('m_frontWing')
            .uint8('m_rearWing')
            .uint8('m_onThrottle')
            .uint8('m_offThrottle')
            .floatle('m_frontCamber')
            .floatle('m_rearCamber')
            .floatle('m_frontToe')
            .floatle('m_rearToe')
            .uint8('m_frontSuspension')
            .uint8('m_rearSuspension')
            .uint8('m_frontAntiRollBar')
            .uint8('m_rearAntiRollBar')
            .uint8('m_frontSuspensionHeight')
            .uint8('m_rearSuspensionHeight')
            .uint8('m_brakePressure')
            .uint8('m_brakeBias')
            .floatle('m_frontTyrePressure')
            .floatle('m_rearTyrePressure')
            .uint8('m_ballast')
            .floatle('m_fuelLoad');
        return _this;
    }
    return CarSetupDataParser;
}(F1Parser_1.F1Parser));
exports.CarSetupDataParser = CarSetupDataParser;
