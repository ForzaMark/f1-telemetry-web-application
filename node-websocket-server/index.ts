import * as express from "express";
import * as http from "http";
import * as WebSocket from "ws";
import { JoinedType } from "../common/types/types";

import bodyParser = require("body-parser");
const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post("/data", function (req, res) {
  sendSomething(req.body);
  res.end(req.body);
});

app.use("/", router);

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws: WebSocket) => {
  ws.on("message", (message: string) => {
    console.log("received: %s", message);
  });
});

server.listen(process.env.PORT || 8999, () => {
  console.log(`Server started on port: ${process.env.PORT || 8999})`);
});

function sendSomething(value: JoinedType) {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(value));
  });
}
