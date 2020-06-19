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
exports.ParticipantDataParser = void 0;
var F1Parser_1 = require("../F1Parser");
var ParticipantDataParser = /** @class */ (function (_super) {
    __extends(ParticipantDataParser, _super);
    function ParticipantDataParser(packetFormat) {
        var _this = _super.call(this) || this;
        _this.uint8('m_aiControlled')
            .uint8('m_driverId')
            .uint8('m_teamId')
            .uint8('m_raceNumber')
            .uint8('m_nationality')
            .string('m_name', { length: 48, stripNull: true });
        if (packetFormat === 2019) {
            _this.uint8('m_yourTelemetry');
        }
        return _this;
    }
    return ParticipantDataParser;
}(F1Parser_1.F1Parser));
exports.ParticipantDataParser = ParticipantDataParser;
