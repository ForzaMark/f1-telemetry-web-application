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
exports.PacketEventDataParser = void 0;
var binary_parser_1 = require("binary-parser");
var constants_1 = require("../../constants");
var F1Parser_1 = require("../F1Parser");
var PacketHeaderParser_1 = require("./PacketHeaderParser");
var PacketEventDataParser = /** @class */ (function (_super) {
    __extends(PacketEventDataParser, _super);
    function PacketEventDataParser(buffer, packetFormat) {
        var _this = _super.call(this) || this;
        _this.unpack2019Format = function (buffer, packetFormat) {
            var eventStringCode = _this.getEventStringCode(buffer, packetFormat);
            if (eventStringCode === constants_1.EVENT_CODES.FastestLap) {
                _this.uint8('vehicleIdx').floatle('lapTime');
            }
            else if (eventStringCode === constants_1.EVENT_CODES.Retirement ||
                eventStringCode === constants_1.EVENT_CODES.TeammateInPits ||
                eventStringCode === constants_1.EVENT_CODES.RaceWinner) {
                _this.uint8('vehicleIdx');
            }
        };
        _this.getEventStringCode = function (buffer, packetFormat) {
            var headerParser = new binary_parser_1.Parser()
                .endianess('little')
                .nest('m_header', { type: new PacketHeaderParser_1.PacketHeaderParser(packetFormat) })
                .string('m_eventStringCode', { length: 4 });
            var m_eventStringCode = headerParser.parse(buffer).m_eventStringCode;
            return m_eventStringCode;
        };
        _this.endianess('little').nest('m_header', {
            type: new PacketHeaderParser_1.PacketHeaderParser(packetFormat)
        });
        _this.string('m_eventStringCode', { length: 4 });
        if (packetFormat === 2019) {
            _this.unpack2019Format(buffer, packetFormat);
        }
        _this.data = _this.fromBuffer(buffer);
        return _this;
    }
    return PacketEventDataParser;
}(F1Parser_1.F1Parser));
exports.PacketEventDataParser = PacketEventDataParser;
