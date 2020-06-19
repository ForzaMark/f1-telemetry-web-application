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
exports.PacketLapDataParser = void 0;
var F1Parser_1 = require("../F1Parser");
var LapDataParser_1 = require("./LapDataParser");
var PacketHeaderParser_1 = require("./PacketHeaderParser");
var PacketLapDataParser = /** @class */ (function (_super) {
    __extends(PacketLapDataParser, _super);
    function PacketLapDataParser(buffer, packetFormat) {
        var _this = _super.call(this) || this;
        _this.endianess('little')
            .nest('m_header', { type: new PacketHeaderParser_1.PacketHeaderParser(packetFormat) })
            .array('m_lapData', { length: 20, type: new LapDataParser_1.LapDataParser() });
        _this.data = _this.fromBuffer(buffer);
        return _this;
    }
    return PacketLapDataParser;
}(F1Parser_1.F1Parser));
exports.PacketLapDataParser = PacketLapDataParser;
