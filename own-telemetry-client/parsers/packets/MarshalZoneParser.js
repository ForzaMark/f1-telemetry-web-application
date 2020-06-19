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
exports.MarshalZoneParser = void 0;
var F1Parser_1 = require("../F1Parser");
var MarshalZoneParser = /** @class */ (function (_super) {
    __extends(MarshalZoneParser, _super);
    function MarshalZoneParser() {
        var _this = _super.call(this) || this;
        _this.endianess('little').floatle('m_zoneStart').int8('m_zoneFlag');
        return _this;
    }
    return MarshalZoneParser;
}(F1Parser_1.F1Parser));
exports.MarshalZoneParser = MarshalZoneParser;
