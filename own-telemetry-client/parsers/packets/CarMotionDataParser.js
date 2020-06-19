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
exports.CarMotionDataParser = void 0;
var F1Parser_1 = require("../F1Parser");
var CarMotionDataParser = /** @class */ (function (_super) {
    __extends(CarMotionDataParser, _super);
    function CarMotionDataParser() {
        var _this = _super.call(this) || this;
        _this.floatle('m_worldPositionX')
            .floatle('m_worldPositionY')
            .floatle('m_worldPositionZ')
            .floatle('m_worldVelocityX')
            .floatle('m_worldVelocityY')
            .floatle('m_worldVelocityZ')
            .uint16('m_worldForwardDirX')
            .uint16('m_worldForwardDirY')
            .uint16('m_worldForwardDirZ')
            .uint16('m_worldRightDirX')
            .uint16('m_worldRightDirY')
            .uint16('m_worldRightDirZ')
            .floatle('m_gForceLateral')
            .floatle('m_gForceLongitudinal')
            .floatle('m_gForceVertical')
            .floatle('m_yaw')
            .floatle('m_pitch')
            .floatle('m_roll');
        return _this;
    }
    return CarMotionDataParser;
}(F1Parser_1.F1Parser));
exports.CarMotionDataParser = CarMotionDataParser;
