import { Component, OnInit } from '@angular/core';
import { JoinedType } from '../../../../common/types/types';
import { FlagService } from './services/flag.service';

@Component({
  selector: 'app-race-table',
  templateUrl: './race-table.component.html',
  styleUrls: ['./race-table.component.scss'],
})
export class RaceTableComponent implements OnInit {
  myWebSocket: WebSocket = new WebSocket('wss://f1-api.cratory.de');
  dataSource: JoinedType[] = [];
  fastestRoundPlayer: JoinedType | undefined;

  displayedColumns: string[] = [
    'name',
    'lastLap',
    'bestLap',
    'penalties',
    'aiDriven',
  ];

  constructor(private readonly flagService: FlagService) {}

  ngOnInit() {
    this.myWebSocket.addEventListener<'message'>('message', (val: any) => {
      const data: JoinedType[] = JSON.parse(val.data);
      this.dataSource = data.sort((a, b) =>
        a.m_carPosition < b.m_carPosition ? -1 : 1
      );
      this.fastestRoundPlayer = data.reduce((a, b) =>
        a.m_bestLapTime < b.m_bestLapTime ? a : b
      );
    });
  }

  getClass(nation: number): string {
    return `flag-icon flag-icon-${this.flagService.getFlagName(
      nation
    )} margin-right`;
  }
}
