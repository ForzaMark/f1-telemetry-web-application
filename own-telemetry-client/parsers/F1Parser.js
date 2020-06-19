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
exports.F1Parser = void 0;
var binary_parser_1 = require("binary-parser");
var F1Parser = /** @class */ (function (_super) {
    __extends(F1Parser, _super);
    function F1Parser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @param {Buffer} buffer
     */
    // tslint:disable-next-line:no-any
    F1Parser.prototype.fromBuffer = function (buffer) {
        return this.parse(buffer);
    };
    return F1Parser;
}(binary_parser_1.Parser));
exports.F1Parser = F1Parser;
