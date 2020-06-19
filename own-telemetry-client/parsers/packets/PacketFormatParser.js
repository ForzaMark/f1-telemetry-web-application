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
exports.PacketFormatParser = void 0;
var F1Parser_1 = require("../F1Parser");
var PacketFormatParser = /** @class */ (function (_super) {
    __extends(PacketFormatParser, _super);
    function PacketFormatParser() {
        var _this = _super.call(this) || this;
        _this.endianess('little').uint16('m_packetFormat');
        return _this;
    }
    return PacketFormatParser;
}(F1Parser_1.F1Parser));
exports.PacketFormatParser = PacketFormatParser;
