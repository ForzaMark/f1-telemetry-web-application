"use strict";
exports.__esModule = true;
var express = require("express");
var http = require("http");
var WebSocket = require("ws");
var bodyParser = require("body-parser");
var router = express.Router();
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
router.post("/data", function (req, res) {
    console.log("data = ", req.body.test);
    sendSomething(req.body);
    res.end("success");
});
app.use("/", router);
var server = http.createServer(app);
var wss = new WebSocket.Server({ server: server });
wss.on("connection", function (ws) {
    ws.on("message", function (message) {
        console.log("received: %s", message);
    });
});
server.listen(process.env.PORT || 8999, function () {
    console.log("Server started on port: " + (process.env.PORT || 8999) + ")");
});
function sendSomething(value) {
    wss.clients.forEach(function (client) {
        client.send(JSON.stringify(value));
    });
}
