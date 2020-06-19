import axios from "axios";
import {
  F1TelemetryClient,
  constants,
} from "./telemetry-client/telemtry-client";
import { Participant, LapData, JoinedType } from "../common/types/types";

const { PACKETS } = constants;
const client = new F1TelemetryClient({ port: 20777 });

function mapToJoinedType(
  participants: Participant[],
  lapData: LapData[]
): JoinedType[] {
  const data = [];
  for (let i = 0; i < participants.length; i++) {
    data.push({ ...lapData[i], ...participants[i] });
  }
  return data;
}

client.on(PACKETS.participants, (participants: Participant[]) => {
  client.on(PACKETS.lapData, async (lapData: LapData[]) => {
    const data = mapToJoinedType(participants, lapData);
    await axios.post("http://f1-api.cratory.de/data", data);
  });
});

client.start();

[
  `exit`,
  `SIGINT`,
  `SIGUSR1`,
  `SIGUSR2`,
  `uncaughtException`,
  `SIGTERM`,
].forEach((eventType) => {
  (process as NodeJS.EventEmitter).on(eventType, () => {
    console.log("client stopped by", eventType);
    client.stop();
  });
});
