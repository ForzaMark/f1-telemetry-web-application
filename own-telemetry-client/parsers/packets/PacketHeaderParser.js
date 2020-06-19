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
exports.PacketHeaderParser = void 0;
var F1Parser_1 = require("../F1Parser");
var PacketHeaderParser = /** @class */ (function (_super) {
    __extends(PacketHeaderParser, _super);
    function PacketHeaderParser(packetFormat) {
        var _this = _super.call(this) || this;
        _this.endianess('little').uint16('m_packetFormat');
        if (packetFormat === 2018) {
            _this.uint8('m_packetVersion').uint8('m_packetId');
        }
        else if (packetFormat === 2019) {
            _this.uint8('m_gameMajorVersion')
                .uint8('m_gameMinorVersion')
                .uint8('m_packetVersion')
                .uint8('m_packetId');
        }
        _this.uint64('m_sessionUID')
            .floatle('m_sessionTime')
            .uint32('m_frameIdentifier')
            .uint8('m_playerCarIndex');
        return _this;
    }
    return PacketHeaderParser;
}(F1Parser_1.F1Parser));
exports.PacketHeaderParser = PacketHeaderParser;
