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

function getNewData() {
  const lapData: LapData[] = [
    { m_bestLapTime: Math.floor(Math.random() * 100) + 1  , m_carPosition: Math.floor(Math.random() * 100) + 1, m_lastLapTime: Math.floor(Math.random() * 100) + 1, m_penalties:  Math.floor(Math.random() * 20) + 1 },
    { m_bestLapTime: Math.floor(Math.random() * 100) + 1, m_carPosition: Math.floor(Math.random() * 100) + 1, m_lastLapTime: Math.floor(Math.random() * 100) + 1,  m_penalties:  Math.floor(Math.random() * 20) + 1 },
    { m_bestLapTime: Math.floor(Math.random() * 100) + 1, m_carPosition: Math.floor(Math.random() * 100) + 1, m_lastLapTime: Math.floor(Math.random() * 100) + 1,  m_penalties:  Math.floor(Math.random() * 20) + 1 },
    { m_bestLapTime: Math.floor(Math.random() * 100) + 1, m_carPosition: Math.floor(Math.random() * 100) + 1, m_lastLapTime: Math.floor(Math.random() * 100) + 1,  m_penalties:  Math.floor(Math.random() * 20) + 1 },
    { m_bestLapTime: Math.floor(Math.random() * 100) + 1, m_carPosition: Math.floor(Math.random() * 100) + 1, m_lastLapTime: Math.floor(Math.random() * 100) + 1,  m_penalties:  Math.floor(Math.random() * 20) + 1 },
    { m_bestLapTime: Math.floor(Math.random() * 100) + 1, m_carPosition: Math.floor(Math.random() * 100) + 1, m_lastLapTime: Math.floor(Math.random() * 100) + 1,  m_penalties:  Math.floor(Math.random() * 20) + 1 },
    { m_bestLapTime: Math.floor(Math.random() * 100) + 1, m_carPosition: Math.floor(Math.random() * 100) + 1, m_lastLapTime: Math.floor(Math.random() * 100) + 1,  m_penalties:  Math.floor(Math.random() * 20) + 1 },
    { m_bestLapTime: Math.floor(Math.random() * 100) + 1, m_carPosition: Math.floor(Math.random() * 100) + 1, m_lastLapTime: Math.floor(Math.random() * 100) + 1,  m_penalties:  Math.floor(Math.random() * 20) + 1 },
    { m_bestLapTime: Math.floor(Math.random() * 100) + 1, m_carPosition: Math.floor(Math.random() * 100) + 1, m_lastLapTime: Math.floor(Math.random() * 100) + 1,  m_penalties:  Math.floor(Math.random() * 20) + 1 },
    { m_bestLapTime: Math.floor(Math.random() * 100) + 1, m_carPosition: Math.floor(Math.random() * 100) + 1, m_lastLapTime: Math.floor(Math.random() * 100) + 1,  m_penalties:  Math.floor(Math.random() * 20) + 1 },
  ];

  const participants: Participant[] = [
    { m_name: "participant1", m_nationality: Math.floor(Math.random() * 83) + 1, m_aiControlled: 0 },
    { m_name: "participant2", m_nationality: Math.floor(Math.random() * 83) + 1, m_aiControlled: 0 },
    { m_name: "participant3", m_nationality: Math.floor(Math.random() * 83) + 1, m_aiControlled: 0 },
    { m_name: "participant4", m_nationality: Math.floor(Math.random() * 83) + 1, m_aiControlled: 0 },
    { m_name: "participant5", m_nationality: Math.floor(Math.random() * 83) + 1, m_aiControlled: 1 },
    { m_name: "participant6", m_nationality: Math.floor(Math.random() * 83) + 1, m_aiControlled: 0 },
    { m_name: "participant7", m_nationality: Math.floor(Math.random() * 83) + 1, m_aiControlled: 0 },
    { m_name: "participant8", m_nationality: Math.floor(Math.random() * 83) + 1, m_aiControlled: 1 },
    { m_name: "participant9", m_nationality: Math.floor(Math.random() * 83) + 1, m_aiControlled: 0 },
    { m_name: "participant10", m_nationality: Math.floor(Math.random() * 83) + 1, m_aiControlled: 1 },
  ];

  return mapToJoinedType(participants, lapData);
}

const timerId = setInterval(() => {
  const data = getNewData();
  axios.post("https://f1-api.cratory.de/data", data);
}, 60000);

setTimeout(() => { clearInterval(timerId); console.log('update stopped') }, 600000);
