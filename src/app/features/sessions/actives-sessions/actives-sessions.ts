import { Component } from '@angular/core';
import { Session } from '@core/interfaces/customers';
import { SessionTable } from '@features/sessions/ui/session-table/session-table';

@Component({
  selector: 'app-actives-sessions',
  imports: [SessionTable],
  templateUrl: './actives-sessions.html',
  styleUrl: './actives-sessions.scss',
})
export class ActivesSessions {
  SESSIONS: Session[] = [
    {
      _id: '1',
      pseudo: 'User1',
      totalSessions: 5,
      totalDuration: 120,
      totalDataUsed: 2.5,
      macAdress: '00:1A:2B:3C:4D:5E',
      device: 'Laptop',
      isStudent: true,
      sessionId: 'sess1',
      ipAddress: 'x.x',
      startTime: new Date(),
      duration: 60,
      dataUsed: 1.0,
      amount: 10,
    },
    {
      _id: '2',
      pseudo: 'User2',
      totalSessions: 5,
      totalDuration: 120,
      totalDataUsed: 2.5,
      macAdress: '00:1A:2B:3C:4D:5E',
      device: 'Laptop',
      isStudent: true,
      sessionId: 'sess1',
      ipAddress: 'x.x',
      startTime: new Date(),
      duration: 60,
      dataUsed: 1.0,
      amount: 10,
    },
  ];

  COLUMNS: string[] = [
    'pseudo',
    'device',
    'startTime',
    'endTime',
    'duration',
    'amount',
  ];
}
