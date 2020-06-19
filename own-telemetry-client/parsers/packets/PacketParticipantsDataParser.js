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
exports.PacketParticipantsDataParser = void 0;
var F1Parser_1 = require("../F1Parser");
var PacketHeaderParser_1 = require("./PacketHeaderParser");
var ParticipantDataParser_1 = require("./ParticipantDataParser");
var PacketParticipantsDataParser = /** @class */ (function (_super) {
    __extends(PacketParticipantsDataParser, _super);
    function PacketParticipantsDataParser(buffer, packetFormat) {
        var _this = _super.call(this) || this;
        _this.endianess('little').nest('m_header', {
            type: new PacketHeaderParser_1.PacketHeaderParser(packetFormat)
        });
        if (packetFormat === 2018) {
            _this.uint8('m_numCars');
        }
        else if (packetFormat === 2019) {
            _this.uint8('m_numActiveCars');
        }
        _this.array('m_participants', {
            length: 20,
            type: new ParticipantDataParser_1.ParticipantDataParser(packetFormat)
        });
        _this.data = _this.fromBuffer(buffer);
        return _this;
    }
    return PacketParticipantsDataParser;
}(F1Parser_1.F1Parser));
exports.PacketParticipantsDataParser = PacketParticipantsDataParser;
