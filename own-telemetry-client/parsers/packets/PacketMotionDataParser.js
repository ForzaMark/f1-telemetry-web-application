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
exports.PacketMotionDataParser = void 0;
var binary_parser_1 = require("binary-parser");
var F1Parser_1 = require("../F1Parser");
var CarMotionDataParser_1 = require("./CarMotionDataParser");
var PacketHeaderParser_1 = require("./PacketHeaderParser");
var PacketMotionDataParser = /** @class */ (function (_super) {
    __extends(PacketMotionDataParser, _super);
    function PacketMotionDataParser(buffer, packetFormat) {
        var _this = _super.call(this) || this;
        _this.endianess('little')
            .nest('m_header', { type: new PacketHeaderParser_1.PacketHeaderParser(packetFormat) })
            .array('m_carMotionData', { length: 20, type: new CarMotionDataParser_1.CarMotionDataParser() })
            .array('m_suspensionPosition', {
            length: 4,
            type: new binary_parser_1.Parser().floatle('')
        })
            .array('m_suspensionVelocity', {
            length: 4,
            type: new binary_parser_1.Parser().floatle('')
        })
            .array('m_suspensionAcceleration', {
            length: 4,
            type: new binary_parser_1.Parser().floatle('')
        })
            .array('m_wheelSpeed', {
            length: 4,
            type: new binary_parser_1.Parser().floatle('')
        })
            .array('m_wheelSlip', {
            length: 4,
            type: new binary_parser_1.Parser().floatle('')
        })
            .floatle('m_localVelocityX') // Velocity in local space
            .floatle('m_localVelocityY') // Velocity in local space
            .floatle('m_localVelocityZ') // Velocity in local space
            .floatle('m_angularVelocityX') // Angular velocity x-component
            .floatle('m_angularVelocityY') // Angular velocity y-component
            .floatle('m_angularVelocityZ') // Angular velocity z-component
            .floatle('m_angularAccelerationX') // Angular velocity x-component
            .floatle('m_angularAccelerationY') // Angular velocity y-component
            .floatle('m_angularAccelerationZ') // Angular velocity z-component
            .floatle('m_frontWheelsAngle'); // Current front wheels angle in radians;
        _this.data = _this.fromBuffer(buffer);
        return _this;
    }
    return PacketMotionDataParser;
}(F1Parser_1.F1Parser));
exports.PacketMotionDataParser = PacketMotionDataParser;
