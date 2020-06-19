export interface Participant {
    m_name: string;
    m_nationality: number;
    m_aiControlled: 1 | 0;
  }
  
  export interface LapData {
    m_lastLapTime: number;
    m_bestLapTime: number;
    m_carPosition: number;
    m_penalties: number;
  }
  
  export interface JoinedType extends LapData, Participant {}
  